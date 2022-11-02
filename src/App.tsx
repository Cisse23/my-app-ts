import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import Hello from './Hello';
import { TodoList } from './TodoList';
import { Todo, AddTodo } from './types.d'

const testTodos: Todo[] = [
  {
    text: 'Create todos',
    complete: false, 
  },
  {
    text: 'Get started',
    complete: true,
  },
]


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

const addTodo: AddTodo = (text: string) => {
  const newTodo = {text, complete: false};
  setTodos([newTodo, ...todos]);
};

  return (
    <div>
      <Hello name='Stranger'/>
      <ul>
        <TodoList todos={todos} toggleComplete={ToggleComplete} />
      </ul>
      <AddTodoForm addTodo={addTodo} />
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