type InteligentButtonProps = {

    disabled: boolean;
    onClick: () => void;
    text?: string

}

export default function InteligentButton ({disabled,onClick,text}: InteligentButtonProps) {


    return (
        <div>
            <p>{text}</p>
            <button disabled={disabled}  onClick={onClick}> {disabled ? 'Número par' : 'Clique aqui'}</button>
        </div>
    )
}