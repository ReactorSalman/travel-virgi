import React from 'react';
import './Dropdown.css';

function Dropdown(props){
    let list = props.allOption && props.allOption.map((opt, i) => { 
        return <option key={i} value={opt.value}>{opt.label}</option>
    });

    return(
    <div>
        <h4 className="dropdown-title">{props.title}</h4>
        <div className="select-list">
            <select name="selectList" id="selectList" onChange={props.onChange}>
                <option value="">Select</option>
                {list}
            </select>
        </div>
    </div>
    );
}

export default Dropdown;