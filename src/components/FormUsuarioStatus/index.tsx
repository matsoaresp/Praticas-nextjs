import { useState } from "react"
import UsuarioStatus from "../UsuarioStatus"

export default function FormUsuarioStatus() {

    const [isOnline, setIsOnline] = useState(false)

    function toggleStatus () {
        setIsOnline( prev => 
            !prev
        );
    }
return (
    <div>
        <button onClick={toggleStatus}>Alterar status</button>
        <UsuarioStatus
        isOnline = {!isOnline}
        >

        </UsuarioStatus>
    </div>
)

}