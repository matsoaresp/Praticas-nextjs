import { useState } from "react";
import OnlineStatus from "../OnlineStatus";




export default function DefaultForm() {

    const [isOnline, setIsOnline] = useState<boolean>(false)


    return (
        <div>
            <form>
                <div>
                    <label>Nome</label>
                </div>
                <button type="button" onClick={() => setIsOnline(!isOnline)}>Entrar</button>
                <OnlineStatus
                isOnline = {isOnline}
                ></OnlineStatus>
            </form>
        </div>
    );
}

