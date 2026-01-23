type ButtonStateProps = {
    state: 'Online' | 'Offline'
    onClick: () => void
}

export default function ButtonState ({state, onClick}: ButtonStateProps) {
   return <div>
    <button onClick={onClick}>{state}</button>
   </div> 
}