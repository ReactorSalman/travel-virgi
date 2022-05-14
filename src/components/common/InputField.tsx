import React from 'react';

interface InputProps{
	id: string;
	value: string;
	disabled: boolean;
	className: string;
};

const InputField = ({ id, value, disabled, className } : InputProps) => {
	return(
		<input
			id={id}
			className={className}
			value={value}
			disabled={disabled}
		/>
	);
}

export default InputField;