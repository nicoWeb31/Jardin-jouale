import axios from 'axios';
import {
    FETCH_SEED_REQUEST,
    FETCH_SEED_FAIL,
    FETCH_SEED_SUCCESS,
    DELETE_SEED_FAIL,
    DELETE_SEED_REQUEST,
    DELETE_SEED_SUCCESS,
    CREATE_SEED_FAIL,
    CREATE_SEED_REQUEST,
    CREATE_SEED_SUCCESS,
    DETAIL_SEED_FAIL,
    DETAIL_SEED_SUCCESS,
    DETAIL_SEED_REQUEST,
    UPDATE_SEED_FAIL,
    UPDATE_SEED_RESET,
    UPDATE_SEED_REQUEST,
    UPDATE_SEED_SUCCESS
} from '../types/seedType';
//____________________________________________________________
export const fetchSeed = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({ type: FETCH_SEED_REQUEST });
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        await axios.get('/api/v1/seed', config);
        dispatch({ type: FETCH_SEED_SUCCESS, payload: true });
    } catch (error) {
        dispatch({ type: FETCH_SEED_FAIL, payload: error });
    }
};

//____________________________________________________________
export const addSeed = (seed) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({ type: CREATE_SEED_REQUEST });
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        await axios.post('/api/v1/seed', seed,config);
        dispatch({ type: CREATE_SEED_SUCCESS });
    } catch (error) {
        dispatch({ type: CREATE_SEED_FAIL, payload: error });
    }
};

//____________________________________________________________
export const deleteSeed = (id) => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({ type: DELETE_SEED_REQUEST });
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        await axios.delete(`/api/v1/seed/${id}`, config);
        dispatch({ type: DELETE_SEED_SUCCESS });
    } catch (error) {
        dispatch({ type: DELETE_SEED_FAIL, payload: error });
    }
};

//_____________________________________________________________________________
export const seedDetailAction = (id) => async (dispatch,getState) => {
    try {

        dispatch({ type: DETAIL_SEED_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        //on dispatch la request pour le loading par exemple
        const { data } = await axios.get(`/api/v1/seed/${id}`, config);

        //on dispatch les datas.. stop loading and display the data
        dispatch({ type: DETAIL_SEED_SUCCESS, payload: data.data.data });
    } catch (error) {
        //dispatch des errors
        dispatch({
            type: DETAIL_SEED_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


//_____________________________________________________________________________
export const seedUpdate = (id) => async (dispatch,getState) => {
    try {

        dispatch({ type: UPDATE_SEED_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        //on dispatch la request pour le loading par exemple
        await axios.patch(`/api/v1/seed/${id}`, config);

        //on dispatch les datas.. stop loading and display the data
        dispatch({ type: UPDATE_SEED_SUCCESS });
    } catch (error) {
        //dispatch des errors
        dispatch({
            type: UPDATE_SEED_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};