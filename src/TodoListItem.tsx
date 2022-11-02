import React from "react";
import {Todo, ToggleComplete} from './types.d'

 interface Props {
    todo: Todo;
    toggleComplete: ToggleComplete;
 }

 //export type toggleComplete = (selectedTodo: Todo) => void;

export const TodoListItem: React.FC<Props> = ({todo, toggleComplete }) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                    <input 
                    type="checkbox" 
                    checked={todo.complete} 
                    onClick={() => {
                        toggleComplete(todo);
                    }}
                    /> {' '}
                    {todo.text}
                    
            </label>
        </li>
    );
};