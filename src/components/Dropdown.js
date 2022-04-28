import React from 'react';

function Dropdown(props){
    return(
    <select name="selectList" id="selectList" onChange={props.handleOptionChange}>
        <option value="">Select</option>
        <option value="new-york">new-york</option>
        <option value="orlando">orlando</option>
        <option value="barbados">barbados</option>
        <option value="toronto">toronto</option>
    </select>
    );
}

export default Dropdown;