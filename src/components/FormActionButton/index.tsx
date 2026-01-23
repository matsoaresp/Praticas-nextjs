import { useEffect, useState } from "react"
import AlertComponent from "../AlertComponent"

export default function FormActionButton () {

    const [ativo, setAtivo] = useState<boolean>(true)

    const handleState = () => {
        setAtivo (prev => 
            !prev 
        )        
    }

    return (
        <div>
            <AlertComponent
            ativo = {ativo}
            >
            </AlertComponent>
            <button onClick={handleState}>Clique para mudar o estado</button>
        </div>
    )
}