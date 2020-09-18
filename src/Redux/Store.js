import {applyMiddleware, combineReducers, createStore} from 'redux';
import ThunkMiddleware from 'redux-thunk'
import MenuReducer from "./Menu-reduser";

let rootReducer = combineReducers({
  menu: MenuReducer
});
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store