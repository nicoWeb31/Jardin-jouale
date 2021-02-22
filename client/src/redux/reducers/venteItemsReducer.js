import {
    FETCH_VENTEITEMS_FAIL,
    FETCH_VENTEITEMS_SUCCESS,
    FETCH_VENTEITEMS_REQUEST,
} from '../types/venteItemsTypes';

export const fetchItemsReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_VENTEITEMS_REQUEST:
            return {
                loading: true,
                items: [],
            };

        case FETCH_VENTEITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
            };

        case FETCH_VENTEITEMS_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
