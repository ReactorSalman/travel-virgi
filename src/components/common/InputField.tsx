import React from 'react';
import { InputProps } from '../../interfaces/CommonTypes';

const InputField = ({ id, value, disabled, className }: InputProps) => {
	return (
		<input
			id={id}
			className={className}
			value={value}
			disabled={disabled}
		/>
	);
}

export default InputField;