import React from 'react';
// import {Link} from 'react-router-dom';
import './repo.css';
const Repo = (props) => {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="repo-card">
                <h1>{props.name}</h1>
            </div>
        </a>
        
    )
}

export default Repo;