import { useState } from "react"
import InteligentButton from "../InteligentButton"



export default function FormParNumber() {

    const [count, setCount] = useState(0)

    const isDisabled = count % 2 === 0

    
    return (
        <div>
            <p>{count}</p>
            {isDisabled && <p>Botão desabilitado</p>}
            
        <InteligentButton
            onClick={() => setCount(prev => prev - 1)}
            disabled={isDisabled}   
        >
            </InteligentButton>  

            <InteligentButton
                onClick={() => setCount (prev => prev + 1)}
                disabled = {false}
            >
                </InteligentButton>      

                <InteligentButton
                onClick={() => setCount (prev => prev - 1)}
                disabled = {false}
            >
                </InteligentButton>     
        </div>
    )

}