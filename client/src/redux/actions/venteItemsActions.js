import {
    FETCH_VENTEITEMS_FAIL,
    FETCH_VENTEITEMS_SUCCESS,
    FETCH_VENTEITEMS_REQUEST,
} from '../types/venteItemsTypes';

import axios from 'axios';

//____________________________________________________________
export const fetchVenteItems = () => async (dispatch, getState) => {
    try {
        const {
            userLogin: { userInfo },
        } = getState();

        dispatch({ type: FETCH_VENTEITEMS_REQUEST });
        const config = {
            headers: { Authorization: `Bearer ${userInfo.token}` },
        };

        const { data } = await axios.get('/api/v1/product', config);
        dispatch({ type: FETCH_VENTEITEMS_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: FETCH_VENTEITEMS_FAIL, payload: error });
    }
};