import {ADD_SCORE} from '../actions/types'

export default function scoreReducer (state=[], action) {
    switch(action.type){
        case ADD_SCORE:
            return state+1
        default: 
            return state
    }
}