import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ButtonProps } from '../../interfaces/CommonTypes';
import Title from './Title';
import "./Button.css";

const Button: React.FC<ButtonProps> = ({ id, disabled, className, onClick }: ButtonProps) => {
	return (
		<div>
			<OverlayTrigger placement='top' delay={{ show: 250, hide: 400 }} overlay={disabled ?
				<Tooltip>Please select all mandatory fields to proceed!</Tooltip> : <></>}>
				<span className='btn-popper'>
					<button
						id={id}
						className={className}
						onClick={onClick}
						disabled={disabled}
					>
						<Title label='Search' className='' />
					</button>
				</span>
			</OverlayTrigger>
		</div>
	)
}

export default Button;