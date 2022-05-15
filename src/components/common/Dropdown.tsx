import React from 'react';
import { DropdownProps } from '../../interfaces/CommonTypes';

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