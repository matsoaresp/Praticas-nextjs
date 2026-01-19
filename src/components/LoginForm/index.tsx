import { useState } from 'react'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import style from './style.module.css'
export function LoginForm ( ){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleConfirm = (e: React.FormEvent) => {
        e.preventDefault()
        if (!email){
            alert('Preencha o campo e-mail')
        }
        if (!senha){
            alert('Preencha o campo senha!')
        }

        alert(`Dados do login Email: ${email} Senha: ${senha}`)
    }
return (
    <div className={style.formContainer}>
       <form onSubmit={handleConfirm} className={style.form}> 
       <DefaultInput 
       labelText='Email' 
       id='email' 
       type = 'text'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       placeholder='Digite seu nome'/>
       
       <DefaultInput 
       labelText='Senha' 
       id = 'senha' 
       value={senha}
       onChange={(e) => setSenha(e.target.value)}
       type='password' 
       placeholder='Digite sua senha'/>

        <DefaultButton type='submit' text='Confirmar'/>
       </form>
    </div>
)
}