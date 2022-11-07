export interface Todo {
  description: string;
  complete: boolean;
  date: Date;
  priority: string;
}

export type ToggleComplete = (selectedTodo: Todo) => void;

export type AddTodo = (description: string, date: Date, priority: string) => void;

export type DeleteTodo = (todo: Todo) => void;