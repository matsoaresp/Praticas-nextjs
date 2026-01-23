type ButtonCountProps = {
    value?: number;
    disabled?: boolean;
    onClick: () => void;
}

export default function ButtonCount ({value,disabled, onClick}: ButtonCountProps) {
    return (
        <div>
            <p>{value}</p>
            <button  disabled={disabled} onClick={onClick}>{disabled ? 'Bloqueado' : 'Clique no botão'} </button>
        </div>
    )
}