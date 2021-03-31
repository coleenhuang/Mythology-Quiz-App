import React, {createContext, useReducer} from 'react';
import {greekQuestions} from './questions/Greek';
import {norseQuestions} from './questions/Norse';

const initialState = {
    type: undefined,
    questions: [],
    index: 0,
    score: 0
}

export const Context = createContext();


const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_TYPE':
        let q = action.payload === 'Greek'? greekQuestions: norseQuestions
        return {
            ...state,
            type: action.payload,
            questions: [...state.questions, ...q]
        };
        case 'RESET_QUESTIONS':
            return {
                ...state, questions: undefined
            }
      default:
        throw new Error();
    };
  }

export const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <Context.Provider value={[state, dispatch]}>
        {props.children}
      </Context.Provider>
    );
};