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
    UPDATE_SEED_RESET,
    UPDATE_SEED_REQUEST,
    UPDATE_SEED_SUCCESS,
    UPDATE_SEED_FAIL
} from '../types/seedType';

export const FetchSeedReducer = (state = { allSeed: [] }, action) => {
    switch (action.type) {
        case FETCH_SEED_REQUEST:
            return {
                loading: true,
                allSeed: [],
            };

        case FETCH_SEED_SUCCESS:
            return {
                loading: false,
                allSeed: action.payload,
            };

        case FETCH_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const deleteSeedReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_SEED_REQUEST:
            return {
                loading: true,
            };

        case DELETE_SEED_SUCCESS:
            return {
                loading: false,
                success: true,
            };

        case DELETE_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const addSeedReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SEED_REQUEST:
            return {
                loading: true,
            };

        case CREATE_SEED_SUCCESS:
            return {
                loading: false,
                success: true,
            };

        case CREATE_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export const detailSeedReducer = (state = { seedDetail: {} }, action) => {
    switch (action.type) {
        case DETAIL_SEED_REQUEST:
            return {
                loading: true,
                seedDetail: {}
            };

        case DETAIL_SEED_SUCCESS:
            return {
                loading: false,
                seedDetail: action.payload,
            };

        case DETAIL_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};


export const UpdateSeedReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SEED_REQUEST:
            return {
                loading: true,
            };

        case UPDATE_SEED_SUCCESS:
            return {
                loading: false,
                success: true,
            };

        case UPDATE_SEED_FAIL:
            return {
                laoding: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
