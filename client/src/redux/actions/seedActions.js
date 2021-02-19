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

        const { data } = await axios.get('/api/v1/seed', config);
        dispatch({ type: FETCH_SEED_SUCCESS, payload: data.data });
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
