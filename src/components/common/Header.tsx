import React from 'react';

interface HeaderProps {
	header: string;
	className: string;
};

const Header = ({ header, className }: HeaderProps) => {
	return (
		<nav className={className}>{header}</nav>
	);
};

export default Header;

