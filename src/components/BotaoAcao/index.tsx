    type BotaoAcaoProps ={

        onClick: () => void
    }

export default function BotaoAcao ({onClick}: BotaoAcaoProps) {

    return (
        <div>
            <button onClick={onClick}>Clique aqui</button>
        </div>
    )
    
}