import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import Hello from './Hello';
import { TodoList } from './TodoList';
import { Todo, AddTodo, DeleteTodo } from './types.d'

const testTodos: Todo[] = [
  {
    description: 'Create todos',
    complete: false, 
    date: new Date("2022-01-01"),
    priority: 'Low'
  },
  {
    description: 'Get started',
    complete: true,
    date: new Date("2022-03-03"),
    priority: 'Medium'
  },
];


function App() {
  const [todos, setTodos] = useState(testTodos);

  const ToggleComplete = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (description: string, date: Date, priority: string) => {
    const newTodo = {description, date, priority, complete: false};
    setTodos([newTodo, ...todos]);
  };

  const DeleteTodo = (selectedTodo: Todo) => {
    console.log("Clicked delete on " + selectedTodo.description );
    setTodos(todos.filter((todo, i) => selectedTodo !== todo))
  };

  return (
    <div>
      <Hello name='Stranger'/>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={ToggleComplete} deleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;


/*
Toteuta React Todolist sovellus käyttäen TypeScript:ia. 
Todo sisältää seuraavat tiedot: description, date, priority. 
Toteuta myös todo poisto toiminnallisuus. 

Sovelluksessa täytyy olla seuraavat komponentit:

Todolist - Renderöi input ja Add button elementit. Sisältää tarvittavat state:t.
Todotable - Rederöi taulukon.
*/
/*
function TodoList(){
    const [todo, setTodo] = React.useState({
        description: 'Get started',
        date: dayjs().toString(), 
        priority: 'Medium'
    });
    const [todoList, setTodoList] = React.useState([]);

*/

//Renderöi input ja Add button elementit. Sisältää tarvittavat state:t.
//Todo sisältää seuraavat tiedot: description, date, priority. 
//Toteuta myös todo poisto toiminnallisuus. 


/**
  interface TodoProps{
    description: string;
    date: Date;
    priority: string;
    //type Priority = "Low" | "Medium" | "High";
 }
function TodoList({description, date, priority}: TodoProps){
    return(
        <div>
             Date: {date}, Priority: {priority}, Todo: {description}         
        </div>
    )
}    
//add todo
//remove todo

export default TodoList;
 */