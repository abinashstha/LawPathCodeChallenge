interface IButtonProps {
    label: string;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    className?: string;
}
