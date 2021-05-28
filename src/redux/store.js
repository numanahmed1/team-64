import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())