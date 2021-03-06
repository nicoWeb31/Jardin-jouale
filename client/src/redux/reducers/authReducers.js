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

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { laoding: true };

        case USER_LOGIN_SUCCESS:
            return { laoding: false, userInfo: action.payload };

        case USER_LOGIN_FAIL:
            return { laoding: false, error: action.payload };

        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { laoding: true };

        case USER_REGISTER_SUCCESS:
            return { laoding: false, userInfo: action.payload };

        case USER_REGISTER_FAIL:
            return { laoding: false, error: action.payload };

        default:
            return state;
    }
};


export const forgotPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FORGOTPASS_REQUEST:
            return { laoding: true };

        case USER_FORGOTPASS_SUCCESS:
            return { laoding: false, success: true };

        case USER_FORGOTPASS_FAIL:
            return { laoding: false, error: action.payload };

        default:
            return state;
    }
};