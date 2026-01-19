import { useRef, useState } from "react";
import { Container } from "../Container";

export function CounterButton() {
    const [counter, setCounter] = useState(0)

    if (counter < 0){
        setCounter(0)
    }
    return (
        <div>
            <Container>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>Zerar</button>
            </Container>
        </div>
    )
}

