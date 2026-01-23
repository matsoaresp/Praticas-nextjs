type AlertProps = {

    ativo: boolean;
}   

export default function AlertComponent ({ativo}: AlertProps) {


    return (
        <div>
            <p>{ativo ? 'Ativo' : 'Inativo' }</p>
        </div>
    )
}