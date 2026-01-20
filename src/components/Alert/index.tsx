type AlertProps = {

    message: string
    type?: 'info' | 'succes' | 'error'
}


export default function Alert ({message, type}: AlertProps) {


return (
    <div>
        <p className={type} >{message} </p>
    </div>
)
}