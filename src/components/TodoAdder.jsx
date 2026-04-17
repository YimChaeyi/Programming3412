import { useState } from 'react';
import Button from './Button.jsx';

export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo] = useState('');

    function handelSubmit(event){
        event.preventDefault();

        if(!inputTodo.trim()) return;
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    return (
        <form className="todo__form" onSubmit={handelSubmit}>

                <input type="text"
                placeholder="할 일을 입력하세요"
                className="todo__input"
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}

                />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}






