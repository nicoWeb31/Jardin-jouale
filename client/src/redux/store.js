import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/authReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
});

//from storage

const cartItemsFromStorages = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
const userInfoFromStrorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

const intialeState = {
    cart: {
        cartItems: cartItemsFromStorages,
    },
    userLogin: { userInfo: userInfoFromStrorage },
};

const middleware = [thunk];
const store = createStore(
    reducer,
    intialeState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
