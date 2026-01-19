import style from './style.module.css'

type DefaultButtonProps = {

    text:string,
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean

}
export function DefaultButton ({text, type = 'submit', disabled = false}: DefaultButtonProps) {
    return (
        <button  
        className= {style.button}
        type= {type}
        disabled = {disabled}
        >{text}</button>
    )
}