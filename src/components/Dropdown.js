import React from 'react';
import './Dropdown.css';

function Dropdown(props){
    let list = props.allOption && props.allOption.map((opt, i) => { 
        return <option key={i} value={opt.value} className="dropdown-option">{opt.label}</option>
    });

    return(
    <div>
        <h3 className="dropdown-title">{props.title}</h3>
        <div className="select-list">
            <select className="dropdown-select" name="selectList" id="selectList" onChange={props.onChange}>
                <option value="" className="dropdown-option">Select</option>
                {list}
            </select>
        </div>
    </div>
    );
}

export default Dropdown;