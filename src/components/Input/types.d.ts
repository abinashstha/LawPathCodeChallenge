interface InputProps {
    id: string;
    label: string;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number';
    onBlur: (e: any) => void;
    isValid: null | boolean;
}
