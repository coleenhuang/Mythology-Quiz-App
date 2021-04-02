import { combineReducers } from 'redux';
import questionsReducer from './questions';
import scoreReducer from './score';
import answersReducer from './answers'

export default combineReducers({
  questionList: questionsReducer,
  answerList: answersReducer,
  score: scoreReducer
})