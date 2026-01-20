type UsuarioStatusProps = {

    isOnline: boolean

}

export default function UsuarioStatus ({isOnline}: UsuarioStatusProps) {

    return (
        <div>
            <p> {isOnline ? 'Usuario Online' : 'Usuario Offline'}</p>
        </div>
    )

}