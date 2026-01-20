import { useState } from "react";
import Button from "../Button";


export default function DefaultForm() {

    const [changeColors, setChangeColors] = useState<'succes' | 'error'>('succes')


    function toggleColor () {
        setChangeColors (prev => 
            prev === 'succes' ? 'error' : 'succes'
        );
    }
    return (
        <div>
            <form>
                <div>
                </div>
               <Button
                type="button"
                color={changeColors}
                onClick={toggleColor}
               >
                 
               </Button>
            </form>
        </div>
    );
}

