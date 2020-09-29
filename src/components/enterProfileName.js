import React from 'react';
import './enterProfileName.css';
import gitlogo from '../assets/gitlogo.svg'
const EnterProfileName = (props) => {
    return(
        <div className="enter-name-container">
            <div className='form-container'>
                <img src={gitlogo} alt='Github Logo'/>
                <input type="text" name='username' value={props.username} onChange={props.change} onKeyDown={props.keypress} placeholder='Enter username'/>
            </div>
        </div>
    )
}

export default EnterProfileName;