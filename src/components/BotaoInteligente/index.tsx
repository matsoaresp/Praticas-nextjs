type BotaoInteligenteProps = {

    text: string
    disabled: boolean
    contador: number
    onClick: (contador: any) => void
}
 

export default function BotaoInteligente ({text, disabled,contador, onClick}: BotaoInteligenteProps) {

    
    return (
        <div>
            <p>{contador}</p>
            <button disabled={disabled}  onClick={onClick}>{text}</button>
        </div>
    )
}