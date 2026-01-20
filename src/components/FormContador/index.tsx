import { useEffect, useState } from "react";
import Contador from "../Contador";

export default function FormContador () {

    const [valor, setValor] = useState(0)
    const [negative, setIsNegative] = useState(false)

   useEffect(() => {

    if(valor < 0){
        setValor(0)
        setIsNegative(true);
    } else {
        setIsNegative (false)
    }

   },[valor])
   
    function decrementar () {
        setValor(prev => prev - 1)
       
    }
    function incrementar () {
        setValor(prev => prev + 1)
    }
return (
    <div>
        <Contador
            valor={valor}
            incrementar={incrementar}
            decrementar={decrementar}
        >
        </Contador>
    </div>
)

}