import React from 'react';
import './Dropdown.css';
import { OptionsType } from "../../helpers";

interface DropdownProps {
    title: string;
    id: string;
    allOption: OptionsType[]
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ title, id, allOption, onChange }: DropdownProps) => {
    let list = allOption && allOption.map((opt, i) => { 
        return <option key={i} value={opt.value} className="dropdown-option">{opt.label}</option>
    });

    return(
    <div>
        <h3 className="dropdown-title">{title}</h3>
        <div className="select-list" id="selectList">
            <select className="dropdown-select" 
                    name="selectList" 
                    id={id} 
                    onChange={onChange}
                    >
                <option value="" className="dropdown-option">Select</option>
                {list}
            </select>
        </div>
    </div>
    );
}

export default Dropdown;