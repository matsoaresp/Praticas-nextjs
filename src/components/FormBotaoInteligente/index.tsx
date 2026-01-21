import { useEffect, useState } from "react"
import BotaoInteligente from "../BotaoInteligente"

export default function FormBotaoInteligente() {

    const [contador, setIsContador] = useState (3)
    const [isDisabled, setIsDisabled] = useState (true)
    

    useEffect(() => {
        setIsDisabled(contador % 2 == 0);
    }, [contador])

    function incrementar ()  {
            setIsContador (prev => prev + 1)
    }

    return (
        <div>

            <p>{isDisabled ? "Bloqueado" : "Liberado"}</p>
            <BotaoInteligente
            disabled={isDisabled}
            onClick={incrementar}
            text="Incrementar"
            contador={contador}>
                
            </BotaoInteligente>
        </div>
    )
} 