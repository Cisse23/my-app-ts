import React from "react";
import {DeleteTodo, Todo, ToggleComplete} from './types.d'

 interface Props {
    todo: Todo;
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
 }

export const TodoListItem: React.FC<Props> = ({todo, toggleComplete, deleteTodo }) => {
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
                    {todo.description}
            </label>
            <label>{' | '}{todo.priority}{' | '}   </label>
            <label>{todo.date.toDateString()}</label>
            <button 
                onClick={() =>{
                    deleteTodo(todo);
                }}>x
            </button>
        </li>
    );
};