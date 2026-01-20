type ContadorProps = {

    valor: number
    incrementar: (valor: any) => void    
    decrementar: (valor: any) => void

}

export default function Contador ({valor, incrementar,decrementar}:ContadorProps) {

    return (
        <div>
            <p>{valor}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )



}