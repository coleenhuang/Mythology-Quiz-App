import React, {createContext, useReducer} from 'react';
import {greekQuestions} from './questions/Greek';
import {norseQuestions} from './questions/Norse';

const initialState = {
    type: undefined,
    questions: [],
    answers: [],
    score: 0
}

export const Context = createContext();


const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_TYPE':
        let q = action.payload === 'greek'? greekQuestions: norseQuestions
        return {
            ...state,
            type: action.payload,
            questions: [...state.questions, ...q]
        };
      case 'RESET_QUESTIONS':
          return {
              ...state, questions: undefined
          }
      case 'ADD_ANSWER':
        return {
          ...state,
          answers:[...state.answers, 
            {
              questionId: action.payload.questionId,
              answerId: action.payload.answerId
            }]
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