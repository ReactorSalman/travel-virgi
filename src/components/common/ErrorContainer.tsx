import React from 'react';
import { CommonProps } from '../../interfaces/CommonTypes';

const ErrorContainer = ({ label, className }: CommonProps) => {
	return (
		<div className={className}>{label}</div>
	);
}

export default ErrorContainer;