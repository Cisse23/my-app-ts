import React, { useState } from "react";
import { AddTodo } from "./types";

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState(Date());
    const [priority, setPriority] = useState('Medium');
    return (
        <form>
            <input type="text" 
            value={text}
            onChange={(event) => {
                setText(event.target.value);
            }} 
            />
            <input type="date" 
            value={date}
            onChange={(event) => {
                setDate(event.target.value);
            }}
            />
            <select name="priority"
            value={priority}
            onChange={(event) => {
                setPriority(event.target.value);
            }}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <button 
            type="submit"
            onClick={(event)=> {
                event.preventDefault();
                addTodo(text, new Date(date), priority);
                setText('');
            }}
            >Add</button>
        </form>
    );
}