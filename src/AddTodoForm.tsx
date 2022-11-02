import React, { useState } from "react";
import { setTextRange } from "typescript";
import { AddTodo } from "./types";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    return (
        <form>
            <input type="text" 
            value={text}
            onChange={(event) => {
                setText(event.target.value);
            }} 
            />
            <button 
            type="submit"
            onClick={(event)=> {
                event.preventDefault();
                addTodo(text);
                setText('');
            }}
            >Add</button>
        </form>
    );
}