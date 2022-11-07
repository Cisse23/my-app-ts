import React from "react";
import { TodoListItem } from "./TodoListItem";
import { DeleteTodo, Todo, ToggleComplete } from "./types";

interface Props {
    todos: Todo[];
    toggleComplete: ToggleComplete;
    deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleComplete, deleteTodo}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem key={todo.description} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
};