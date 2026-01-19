type UserInfoProps = {
    nome: string
    idade: string
    
}


export default function UserInfo ({nome, idade}: UserInfoProps) {

return  (
    <div>
        <p>Nome: {nome} </p>
        <p>Idade: {idade}</p>
    </div>
)
}