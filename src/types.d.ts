export interface Todo {
  text: string;
  complete: boolean;
}

export type ToggleComplete = (selectedTodo: Todo) => void;

export type AddTodo = (text: string) => void;

//export default {Todo, ToggleComplete}