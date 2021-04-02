import React, {useContext, useState, useEffect} from 'react';
import AnswerOptions from './AnswerOptions';


const QuestionForm = ({index, nextQuestion}) => {
    const [state, dispatch] = useContext(Context);
    const [selectedAnswer, setAnswer] = useState();
    
    let q = state.questions[index]

    const handleChange = (event) => {
        setAnswer(event.target.value)
    }
    const submitAnswer = (event) => {
        event.preventDefault();
        dispatch({
            type:'ADD_ANSWER',
            payload: {
                questionId: q.id,
                answerId: selectedAnswer
            }
        })
        nextQuestion()
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
            <button type='submit'>Next</button>
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