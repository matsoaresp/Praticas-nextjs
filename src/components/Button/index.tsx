import style from './style.module.css'

    type ButtonProps = {
        type: 'button'
        color: 'succes' | 'error'
        onClick: () => void;
    }

export default function Button ({type,color, onClick}: ButtonProps) {


    return (
        <div>
            <button type={type} className={style[color]} onClick={onClick}>Clique aqui</button>
        </div>
    )
}