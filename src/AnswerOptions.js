import React from 'react';

const AnswerOptions  = (props) => {
    return (
        <ul>
                {props.answers.map((answer, index) => (
                    <li key={answer.id}>
                        <input type="radio" name={`r${index}`} id={answer.id}/>
                        <label for={`r${index}`}>{answer.text}</label>
                    </li>
                ))}
        </ul>
    )
}

export default AnswerOptions;