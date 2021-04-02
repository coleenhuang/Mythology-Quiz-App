import React from 'react';

const AnswerOptions  = (props) => {
    console.log(props.answers)
    return (
        <ul onChange={props.change}>
                {props.answers.map((answer, index) => (
                    <li key={`a${answer.id}`}>
                        <input required type="radio" name='answerOption' id={`r${index}`} value={answer.id}/>
                        <label htmlFor={`r${index}`}>{answer.text}</label>
                    </li>
                ))}
        </ul>
    )
}

export default AnswerOptions;