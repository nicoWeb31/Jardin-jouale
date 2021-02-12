import {
    USER_LOGOUT,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_REQUEST,
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
