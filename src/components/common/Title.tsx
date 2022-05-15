import React from 'react';

interface TitleProp {
	title: string;
	className: string;
}

const Title = ({ title, className }: TitleProp) => {
	return (
		<span className={className}>{title}</span>
	);
}

export default Title;