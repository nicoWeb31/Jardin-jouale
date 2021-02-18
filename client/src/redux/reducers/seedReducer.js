import {
    FETCH_SEED_REQUEST,
    FETCH_SEED_FAIL,
    FETCH_SEED_SUCCESS,
} from '../types/seedType';

export const FetchSeedReducer = (state = {allSeed : []}, action) => {
    switch (action.type) {

        case FETCH_SEED_REQUEST:
            return {
                loading : true,
                allSeed : [],
            }

        case FETCH_SEED_SUCCESS:
            return {
                loading : false,
                allSeed : action.payload,
            }
            
        case FETCH_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            }    

        default:
            return state;
    }
};
