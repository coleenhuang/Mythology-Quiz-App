import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {Context} from './store'

const Start = () => {
    const [state, dispatch] = useContext(Context);
    const handleClick = (type) => {
        dispatch({
            type: 'SET_TYPE',
            payload: type
        })
    }
    return (
        <div>
            <h2>How much do you know about mythology?</h2>
            <button onClick={() => handleClick('greek')}>
                <Link to={`/questions/greek`}>Greek and Roman</Link>
            </button>
            <button onClick={() => handleClick('norse')}>
                <Link to={`/questions/norse`}>Norse</Link>
            </button>
            
        </div>
    )
}



export default Start;