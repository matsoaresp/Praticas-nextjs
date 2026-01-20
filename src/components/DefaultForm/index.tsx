import { useState } from "react";
import Greeting from "../Greeting";



export default function DefaultForm() {

    const [nome, setNome] = useState(undefined);

    return (
        <div>
            <form>
                <div>
                    <label>Nome</label>

                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <Greeting
                name={nome}>

                </Greeting>

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

