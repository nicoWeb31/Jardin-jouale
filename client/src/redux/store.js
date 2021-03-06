import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxForm } from 'redux-form';

import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    forgotPasswordReducer,
} from './reducers/authReducers';
import {
    FetchSeedReducer,
    deleteSeedReducer,
    addSeedReducer,
    detailSeedReducer,
    UpdateSeedReducer,
} from '../redux/reducers/seedReducer';
import { fetchItemsReducer,addItemsReducer } from '../redux/reducers/venteItemsReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    forgotPassword: forgotPasswordReducer,
    seeds: FetchSeedReducer,
    deleteSeed: deleteSeedReducer,
    addSeed: addSeedReducer,
    detailSeed: detailSeedReducer,
    updateSeed: UpdateSeedReducer,
    itemsVente: fetchItemsReducer,
    addItemsVente: addItemsReducer,
    form: reduxForm,
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
