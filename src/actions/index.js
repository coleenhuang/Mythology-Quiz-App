import {FETCH_QUESTIONS, RESET_QUESTIONS, RESET_ANSWERS, ADD_ANSWER} from './types'

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

export function addAnswer (questionId, answerId) {
    return {
        type: ADD_ANSWER,
        payload: {
            questionId,
            answerId
        }
    }
}

export function resetAnswers () {
    return {
        type: RESET_ANSWERS
    }
}


