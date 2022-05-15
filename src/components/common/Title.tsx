import React from 'react';
import { CommonProps } from '../../interfaces/CommonTypes';

const Title: React.FC<CommonProps> = ({ label, className }: CommonProps) => {
	return (
		<span className={className}>{label}</span>
	);
}

export default Title;