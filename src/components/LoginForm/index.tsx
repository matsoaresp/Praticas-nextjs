import { useState } from 'react'
import { DefaultInput } from '../DefaultInput'
import style from './style.module.css'
import Button from '../Button'
export function LoginForm ( ){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [variant, setVariant] = useState<'primary' | 'secondary' | 'danger'>('primary')



    const handleConfirm = () => {
       
        if (!email){
            alert('Preencha o campo e-mail')
            setVariant('danger')
            return
            
        }
        if (!senha){
            alert('Preencha o campo senha!')
            setVariant('danger')
            return 
        }
        setVariant('primary')

        alert(`Dados do login Email: ${email} Senha: ${senha}`)
    }
return (
    <div className={style.formContainer}>
       <form  className={style.form}> 
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

        <Button 
        onClick={handleConfirm}
       
        type='button' 
        text='Confirmar'
        variant={variant}
        disabled= {false}/>
       </form>
    </div>
)
}