import React from "react";
import { TodoListItem } from "./TodoListItem";
import { Todo, ToggleComplete } from "./types";

interface Props {
    todos: Todo[];
    toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<Props> = ({ todos, toggleComplete}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />
            ))}
        </ul>
    );
};