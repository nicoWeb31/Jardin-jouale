import {
    USER_LOGOUT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_FORGOTPASS_FAIL,
    USER_FORGOTPASS_SUCCESS,
    USER_FORGOTPASS_REQUEST
} from '../types/authTypes';

import axios from 'axios';

export const login = ({ email, password }) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        const { data } = await axios.post(
            `/api/v1/auth/login`,
            { email, password },
            config
        );
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
        localStorage.setItem('userInfo', JSON.stringify(data.user));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const register = ({name, email, password}) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        const { data : { data } } = await axios.post(
            `/api/v1/auth/singnup`,
            {name,email,password},
            config
        );
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.user });
        dispatch({ type:USER_LOGIN_SUCCESS, payload: data.user})
        localStorage.setItem('userInfo', JSON.stringify(data.user));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
};


export const forgotPass = (email)=> async(dispatch) =>{
    try {
        dispatch({ type: USER_FORGOTPASS_REQUEST });
        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };
        await axios.post(
            `/api/v1/auth/forgotPassword`,
            { email },
            config
        );
        dispatch({ type: USER_FORGOTPASS_SUCCESS });

    } catch (error) {
        dispatch({
            type: USER_FORGOTPASS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
