import React, {createContext, useReducer} from 'react';

const initialState = {
    type: undefined,
    questions: [],
    index: 0,
    correctAnswers: 0
}

export const Context = createContext();


const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_TYPE':
        return {type: action.payload};
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