import React from 'react';
import {useParams} from 'react-router-dom'

const Questions = () => {
    //type shows which set of questions to use
    let { type } = useParams();
    
    return (
        <div>
            Questions: {type}
        </div>
    )
}

export default Questions;