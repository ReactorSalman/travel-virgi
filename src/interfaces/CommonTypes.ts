import { OptionsType } from "./HelperTypes";

export interface ButtonProps {
	id: string;
	disabled: boolean;
	className: string;
	onClick: React.MouseEventHandler<HTMLButtonElement>;

};

export interface DropdownProps {
	id: string;
	allOption: OptionsType[];
	className: string;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export interface CommonProps {
	label: string;
	className: string;
};

export interface InputProps {
	id: string;
	value: string;
	disabled: boolean;
	className: string;
};
