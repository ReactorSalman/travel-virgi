import React from 'react';
import "./Button.css";

interface ButtonProps {
    id: string;
    title: string;
    disabled: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ id, title, disabled, onClick } : ButtonProps) => {
    return(
        <div>
            <button
                id={id}
                className="search-button"
                onClick={onClick}  
                disabled={disabled}
            >
                {title}
            </button>
        </div>
    )
}

export default Button;