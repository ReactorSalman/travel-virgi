import React from 'react';
import "./Button.css";

function Button(props){
    return(
        <div>
            <button onClick={props.onClick} className="search-button">
                {props.title}
            </button>
        </div>
    )
}

export default Button;