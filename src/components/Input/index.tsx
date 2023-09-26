import React from 'react';

const Input = (props: InputProps) => {
    const { id, label, type, value, onChange } = props;
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type || 'text'}
                value={value}
                onChange={onChange}
                className="form-input"
            />
        </>
    );
};

export default Input;
