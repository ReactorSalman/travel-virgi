import React from 'react';

interface ErrorProps {
    error: string;
};

const ErrorContainer = ({error}: ErrorProps) => {
    return (
        <div>{error}</div>
    );
}

export default ErrorContainer;