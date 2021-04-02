import { combineReducers } from 'redux';
import questionsReducer from './questions';
import answersReducer from './answers'

export default combineReducers({
  questionList: questionsReducer,
  answerList: answersReducer,
})