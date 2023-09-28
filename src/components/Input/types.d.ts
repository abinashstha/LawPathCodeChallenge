interface InputProps {
    id: string;
    label: string;
    value: string | number;
    isValid: boolean | null;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number';
}
