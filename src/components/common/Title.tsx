import React from 'react';
import { CommonProps } from '../../interfaces/CommonTypes';

const Title = ({ label, className }: CommonProps) => {
	return (
		<span className={className}>{label}</span>
	);
}

export default Title;