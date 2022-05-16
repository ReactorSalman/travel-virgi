import React from 'react';
import { InputProps } from '../../interfaces/CommonTypes';

const InputField: React.FC<InputProps> = ({ id, type, value, disabled, className, checked, onChange }: InputProps) => {
	return (
		<input
			id={id}
			className={className}
			type={type}
			value={value}
			disabled={disabled}
			checked={checked}
			onChange={onChange}
		/>
	);
}

export default InputField;