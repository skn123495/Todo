import {combineReducers} from 'redux';
import CrudReducer from './CrudReducer';
const RootReducer = combineReducers({
  CrudReducer: CrudReducer,
});

export default RootReducer;
