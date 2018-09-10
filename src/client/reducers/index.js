import {combineReducers} from 'redux';
import boatsReducer from './boatsReducer';
import boatReducer from './boatReducer';


export default combineReducers({
    boats:boatsReducer,
    boat:boatReducer
})