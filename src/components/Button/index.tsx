import React from 'react';

const Button = (props: IButtonProps) => {
    const { label, type, className } = props;
    return (
        <button type={type || 'button'} className={`btn ${className || ''}`}>
            {label}
        </button>
    );
};

export default Button;
