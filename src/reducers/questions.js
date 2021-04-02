import {FETCH_QUESTIONS, RESET_QUESTIONS} from '../actions/types';
import {greekQuestions} from '../questions/Greek';
import {norseQuestions} from '../questions/Norse';

export default function questionsReducer (state=[], action) {
    switch(action.type){
        case FETCH_QUESTIONS:
            switch(action.payload){
                case 'greek':
                    return [...state, ...greekQuestions]
                case 'norse':
                    return [...state, ...norseQuestions]
                default:
                    throw new Error()
            }
        case RESET_QUESTIONS:
            return []
        default: 
            return state
    }
}