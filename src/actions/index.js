import {FETCH_QUESTIONS, RESET_QUESTIONS, ADD_SCORE} from './types'

export function fetchQuestions(questionType){
    return {
        type: FETCH_QUESTIONS,
        payload: questionType
    }
}

export function resetQuestions(){
    return {
        type: RESET_QUESTIONS
    }
}

export function addScore () {
    return {
        type: ADD_SCORE
    }
}