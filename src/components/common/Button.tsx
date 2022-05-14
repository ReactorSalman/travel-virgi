import React from 'react';
import "./Button.css";
import Title from './Title';

interface ButtonProps {
    id: string;
    disabled: boolean;
    className: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    
};

const Button = ({ id, disabled, className, onClick } : ButtonProps) => {
    return(
        <div>
            <button
                id={id}
                className={className}
                onClick={onClick}
                disabled={disabled}
            >
                <Title title='Search' className='' />
            </button>
        </div>
    )
}

export default Button;