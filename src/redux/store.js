import {applyMiddleware, combineReducers, createStore} from "redux";
import {headerReducer} from "./headerReducer";
import {coursesReducer} from "./coursesReducer";
import ReduxThunk from 'redux-thunk'
import {converterReducer} from "./converterReducer";


let reducers = combineReducers({
  header: headerReducer,
  courses: coursesReducer,
  converter: converterReducer
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;