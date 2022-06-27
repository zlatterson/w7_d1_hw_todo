import { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {name: 'Buy Shopping', priority: "low"},
    {name: 'Clean Bathroom', priority: "high"},
    {name: 'Car\'s MOT', priority: "low"}
  ])

  const [newTodo, setNewTodo] = useState("");
  const [newRadio, setNewRadio] = useState("low")


  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority === 'high' ? 'high-prio' : 'low-prio'}>
        <span>{todo.name}</span>
      </li>
    );
  });
  const handleTodoInput = (event) => {
    setNewTodo(event.target.value)
  }
  const handleRadioInput = (event) => {
    setNewRadio(event.target.value)
  }

  const saveNewTodo = (event) => {
    event.preventDefault();
    const copyTodos = [...todos]
    copyTodos.push({name: newTodo, priority:newRadio})
    setTodos(copyTodos)
    setNewTodo("")
  }

  return (
    <div className ="App">
    <h1>ToDo list</h1>

    <form onSubmit={saveNewTodo}>
      <label htmlFor="new-todo">Add a new ToDo</label>
      <input type="text" value={newTodo} onChange={handleTodoInput}/>
      <input type="radio" value="low" name="priority" onChange={handleRadioInput} /> low
      <input type="radio" value="high" name="priority" onChange={handleRadioInput} /> high
      <input type="submit" value ="save new ToDo"/>

    </form>
    <ul>{todoNodes}</ul>
    </div>

  );
}

export default App;
