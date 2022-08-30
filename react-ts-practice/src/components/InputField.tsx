import React, { useRef } from 'react'
import { type } from '@testing-library/user-event/dist/type';
import "./styles.css"

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
};

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd} : Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    return (
        <form 
            className='input' 
            onSubmit={(e)=> {
                handleAdd(e);
                inputRef.current?.blur();
            } }>
            <input type='input' 
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
            placeholder='Enter a task' className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField
