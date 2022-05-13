import React from 'react';

interface InputProps{
	title: string;
	id: string;
	value: string;
	disabled: boolean;
};

const InputField = ({ title, id, value, disabled } : InputProps) => {
	return(
		<div>
		{title}
		<input
			id={id}
			type="input"
			value={value}
			disabled={disabled}
		/>
		</div>
	);
}

export default InputField;