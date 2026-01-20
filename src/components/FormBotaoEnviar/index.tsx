import { useState } from "react";
import BotaoEnviar from "../BotaoEnviar";

export default function FormBotaoEnviar () {

    const [buttonDisabled, setButtonDisabled] = useState(true);

    return (
        <div>
           <BotaoEnviar
            disabled = {buttonDisabled}
            onClick={() => setButtonDisabled(prev => !prev)}
           >
           </BotaoEnviar>

        </div>
    )
}