import style from './style.module.css'

export type ButtonProps = {

    text: string
    type: 'button' | 'submit' | 'reset'
    onClick?: () => void
    disabled: boolean
    variant: 'primary' | 'secondary' | 'danger'
}

export default function Button ({
    text, 
    type = 'button',
     onClick, 
     disabled = false, 
     
     variant = 'primary'}:ButtonProps) {

    return (
         <div>
        <button type={type}
        onClick={onClick}
         className={`${style.button} ${style[variant]}`}
        disabled={disabled}>{text}
        </button>
    </div>
    )
}