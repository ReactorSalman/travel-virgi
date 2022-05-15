import React from 'react';
import { CommonProps } from '../../interfaces/CommonTypes';

const ErrorContainer: React.FC<CommonProps> = ({ label, className }: CommonProps) => {
	return (
		<div className={className}>{label}</div>
	);
}

export default ErrorContainer;