import React, {useContext, useState, useEffect} from 'react';
import AnswerOptions from './AnswerOptions';

import {Context} from './store'

const QuestionForm = ({index}) => {
    const [state, dispatch] = useContext(Context);
    const [selectedAnswer, setAnswer] = useState();
    
    let q = state.questions[index]

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }
    const submitAnswer = (event) => {
        event.preventDefault();
        console.log('submit!')
    }

    const renderForm  = () => {
        if(state.questions.length === 0) {
            return null
        }
        else {
            return (
            <form onSubmit={submitAnswer}>
            <h2>{q.questionText}</h2>
            <AnswerOptions answers={q.options} change={handleChange}/>
            <button type='submit'>Submit</button>
            </form>
            )
        }
    }

    return (
        <div>   
            {renderForm()}
        </div>
    )
}

export default QuestionForm;