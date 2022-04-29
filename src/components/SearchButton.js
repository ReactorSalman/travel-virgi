import React from 'react';
import "./SearchButton.css";

function SearchButton(props){
    return(
        <div>
            <button onClick={props.onClick} className="search-button">
                {props.title}
            </button>
        </div>
    )
}

export default SearchButton;