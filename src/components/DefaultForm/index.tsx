import { useState } from "react";
import Alert from "../Alert";



export default function DefaultForm() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [statusAlert, setStatusAlert] = useState<'info' | 'succes' | 'error'>('succes')

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault()

        if(!email || !senha) {
            setStatusAlert('error')
            return
        }

        setStatusAlert('succes')

    }
    return (
        <div>
            <form onSubmit={handleConfirm}>
                <div>
                    <label>Email</label>

                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <input
                        value={senha}
                        type="password"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>

                {statusAlert === 'error' && (

                    <Alert
                        type="error"
                        message="Preencha email e senha"
                    />
                )}

                {statusAlert === 'succes' && (
                    <Alert
                    type="succes"
                    message="Login realizado com sucesso!" 
                    ></Alert>
                )}
            </form>


        </div>
    );
}

