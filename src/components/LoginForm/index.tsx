import { useState } from "react";
import StatusBadge from "../StatusBadge";


export function LoginForm() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState<'succes' | 'warning' | 'error'>('succes')

    const handleConfirm = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || !password) {
    alert('Preencha todos os campos');
    setStatus('error');
    return;
  }
  setStatus('succes');
};

     return (
    <div>
      <form onSubmit={handleConfirm}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      <StatusBadge status={status} />
    </div>
  );
}