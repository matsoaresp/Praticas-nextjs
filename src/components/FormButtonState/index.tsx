import { useEffect, useState } from "react";
import ButtonState from "../ButtonState";

export default function FormButtonState () {

    const [state, setState] = useState<'Online' | 'Offline'>('Online');  


    useEffect (() => {
        console.log(`O estado atual do botão é ${state}`)

    }, [state])
    const changeState = () => {
        setState( prev => prev === 'Online' ?  'Offline': 'Online')
    }


     return (
            <div>
               <ButtonState
                onClick={changeState}
                state={state}
               >
               </ButtonState>
                
            </div>
        )

}