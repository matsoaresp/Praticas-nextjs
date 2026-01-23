import { useState } from "react";
import ButtonCount from "../ButtonCount";

export default function FormButtonCount () {

    const [count, setCount] = useState(0)
    const [disabled, setDisabled] = useState<boolean>(false)

    const handleCountIncrement = () => {
        setCount (
            prev => prev + 1
        );
    }
    const handleCountDecrement = () => {
        setCount (
            prev => prev - 1
        )
    }

    const isDisabled = count <= 0;

    return (
        <div>
            <ButtonCount
            value={count}
            disabled={false}
            onClick={handleCountIncrement}
            >
            </ButtonCount>
            <ButtonCount
            disabled={isDisabled}
            onClick={handleCountDecrement}>
            </ButtonCount>
        </div>
    )


}