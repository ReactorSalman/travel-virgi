import React from 'react';
import { CommonProps } from '../../interfaces/CommonTypes';

const Header = ({ label, className }: CommonProps) => {
	return (
		<nav className={className}>{label}</nav>
	);
};

export default Header;

