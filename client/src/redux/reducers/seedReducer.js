import {
    FETCH_SEED_REQUEST,
    FETCH_SEED_FAIL,
    FETCH_SEED_SUCCESS,
    DELETE_SEED_FAIL,
    DELETE_SEED_REQUEST,
    DELETE_SEED_SUCCESS
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


export const deleteSeedReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_SEED_REQUEST:
            return {
                loading : true
            }

        case DELETE_SEED_SUCCESS:
            return {
                loading : false,
                success : true,
            }
            
        case DELETE_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            }    

        default:
            return state;
    }
};


