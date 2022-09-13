import { combineReducers } from 'redux';
import countDownReducer from './countDownReducer';

const reducers = combineReducers({
  time: countDownReducer,
});
export default reducers;
