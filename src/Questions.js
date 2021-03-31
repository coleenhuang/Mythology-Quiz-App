import React, {useContext} from 'react';
import AnswerOptions from './AnswerOptions';


import {Context} from './store'

const Questions = () => {
    const [state, dispatch] = useContext(Context);
    let q = state.questions[state.index]
    /*const renderQuestion = () => {
        if (!question) {
            return null
        }
        return (
            
        )
    }*/
    console.log(state)

    return (
        <div>
            <form>
            <h2>{q.questionText}</h2>
            <AnswerOptions answers={q.options} />
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Questions;