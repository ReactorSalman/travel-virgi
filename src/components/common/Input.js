import React from 'react';

const Input = (props) => {
    return(
        <div>
        {props.title}
        <input
            id={props.id} 
            value={props.value}
            disabled={props.disabled}
        />
        </div>
    );
}

export default Input;