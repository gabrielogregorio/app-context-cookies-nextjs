import { typeInput } from '../../core/types/basics'


interface InputInterface {
    type: typeInput,
    name: string,
    label: string,
    value: any,
    setValue: (value: any) => void
}

export default function Input( {type, name, label, value, setValue}: InputInterface ) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={(e) => setValue(e.target.value)}/>
        </>
    )
}