import {combineReducers} from 'redux';
import reducerRootState from './ReducerRootState';

const rootReducer = combineReducers({
  rootState: reducerRootState
});

export default rootReducer;