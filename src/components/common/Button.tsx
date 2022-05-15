import React from 'react';
import { ButtonProps } from '../../interfaces/CommonTypes';
import Title from './Title';

const Button = ({ id, disabled, className, onClick }: ButtonProps) => {
	return (
		<div>
			<button
				id={id}
				className={className}
				onClick={onClick}
				disabled={disabled}
			>
				<Title label='Search' className='' />
			</button>
		</div>
	)
}

export default Button;