import React from 'react';

function Dropdown(props){
    let list = props.allOption && props.allOption.map((opt, i) => { 
        return <option key={i} value={opt.value}>{opt.label}</option>
    });

    return(
    <div>
        <h4>{props.title}</h4>
        <select name="selectList" id="selectList" onChange={props.onChange}>
            <option value="">Select</option>
            {list}
        </select>
    </div>
    );
}

export default Dropdown;