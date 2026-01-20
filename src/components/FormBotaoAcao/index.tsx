import BotaoAcao from "../BotaoAcao"

export default function FormBotaoAcao () {

    const mostrarAlerta = () => {
        alert('Botao clicado!')
    }

return (
    <div>
        <BotaoAcao
        onClick={mostrarAlerta}
        >
        </BotaoAcao>
    </div>
)
}