import React from 'react';
import "./SearchButton.css";

function SearchButton(props){
    return <div className="search-button"><button onClick={props.onClick}>{props.title}</button></div>
}

export default SearchButton;