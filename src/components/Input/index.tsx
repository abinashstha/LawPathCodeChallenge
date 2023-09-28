import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Input = forwardRef((props: InputProps, ref) => {
    const { id, label, type, value, onChange, isValid, onBlur } = props;
    const inputRef = useRef<any>();

    const activate = () => {
        inputRef?.current?.focus();
    };
    useImperativeHandle(ref, () => {
        return { focus: activate };
    });
    return (
        <div className={`control ${isValid === false ? 'invalid' : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                id={id}
                type={type || 'text'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
});

export default Input;
