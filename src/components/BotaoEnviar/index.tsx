type BotaoEnviarProps = {

    disabled: boolean
    onClick: () => void

}

export default function BotaoEnviar ({disabled, onClick}: BotaoEnviarProps) {

return (
    <div>
        <button onClick={onClick} >{disabled ? 'Aguarde' : 'Enviar'}</button>
    </div>
)


}