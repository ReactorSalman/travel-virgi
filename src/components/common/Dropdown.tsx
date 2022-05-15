import React from 'react';
import { OptionsType } from "../../helpers/HelperTypes";

interface DropdownProps {
	id: string;
	allOption: OptionsType[];
	className: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Dropdown = ({ id, allOption, className, onChange }: DropdownProps) => {
	let list = allOption && allOption.map((opt, i) => {
		return <option key={i} value={opt.value}>{opt.label}</option>
	});

	return (
		<div>
			<div id="selectList">
				<select
					className={className}
					name="selectList"
					id={id}
					onChange={onChange}
				>
					<option value="">Select</option>
					{list}
				</select>
			</div>
		</div>
	);
}

export default Dropdown;