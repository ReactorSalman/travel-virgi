import React from 'react';
import './Dropdown.css';
import { OptionsType } from "../../interfaces/HelperTypes";

interface DropdownProps {
    id: string;
    allOption: OptionsType[];
    className: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ id, allOption, className, onChange }: DropdownProps) => {
    let list = allOption && allOption.map((opt, i) => {
        return <option key={i} value={opt.value} className="dropdown-option">{opt.label}</option>
    });

    return (
        <div>
            <div className="" id="selectList">
                <select
                    className={className}
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