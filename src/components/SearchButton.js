import React from 'react';

function SearchButton(props){
    return <button onClick={props.onClick}>{props.title}</button>
}

export default SearchButton;