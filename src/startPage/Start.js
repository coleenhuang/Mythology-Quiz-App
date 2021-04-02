import React from 'react';
import { Link } from 'react-router-dom';


const Start = () => {
    return (
        <div>
            <h2>How much do you know about mythology?</h2>
            <button>
                <Link to={`/questions/greek`}>Greek and Roman</Link>
            </button>
            <button>
                <Link to={`/questions/norse`}>Norse</Link>
            </button>
            
        </div>
    )
}



export default Start;