import React from 'react';

interface ErrorProps {
    error: string;
    className: string;
};

const ErrorContainer = ({error, className}: ErrorProps) => {
    return (
        <div className={className}>{error}</div>
    );
}

export default ErrorContainer;