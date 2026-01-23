
import style from './style.module.css'
type StatusBadgeProps = {

status: 'succes' | 'error' | 'warning'

}

export default function StatusBadge({status = 'succes'}:StatusBadgeProps) {
    return (
        <div className={`${style.button} ${style[status]}`}>
        </div>
    )

}