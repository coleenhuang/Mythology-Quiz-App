import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'
import {Context} from './store'

const Questions = () => {
    //type shows which set of questions to use
    let { type } = useParams();
    const [state, dispatch] = useContext(Context);
    return (
        <div>
            Questions: {state.type}
        </div>
    )
}

export default Questions;