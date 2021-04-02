import { combineReducers } from 'redux';
import questionsReducer from './questions';
import scoreReducer from './score';

export default combineReducers({
  questionList: questionsReducer,
  score: scoreReducer
})