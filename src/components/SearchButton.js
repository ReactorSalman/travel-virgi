import React from 'react';

function SearchButton(props){
    return <button onClick={props.onClick}><div>{props.title}</div></button>
}

export default SearchButton;