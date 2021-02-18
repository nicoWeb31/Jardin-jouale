import axios from 'axios';
import {
    FETCH_SEED_REQUEST,
    FETCH_SEED_FAIL,
    FETCH_SEED_SUCCESS,
} from '../types/seedType';

export const fetchSeed = () => async (dispatch, getState) => {


    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({ type: FETCH_SEED_REQUEST });
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        const { data } = await axios.get('api/v1/seed', config);
        dispatch({ type: FETCH_SEED_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_SEED_FAIL, payload: error });
    }
};
