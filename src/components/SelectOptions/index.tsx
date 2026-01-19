import { useState } from "react";
import DefaultSelect, { type SelectOption } from "../DefaultSelect";

export function SelectOptions () {

    const [estado, setEstado] = useState('')

    const estados: SelectOption[]  = [
    { value: 'RJ', text: 'Paraná' },
    { value: 'PR', text: 'São Paulo' },
    { value: 'SP', text: 'Rio de Janeiro' },
    { value: 'BA', text: 'Bahia' }
    ] 
    
    return (
        <div>
            <DefaultSelect 
            value={estado}
            options={estados}
            onChange={setEstado}>
            </DefaultSelect>
        </div>
    )
}