
type GreetingProps = {

    name?: string
}
export default function Greeting ({name = 'Visitante'}: GreetingProps) {

return (
    <div>
        <p>Olá {name}</p>
    </div>
)

}