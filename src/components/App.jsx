import React from "react";
import TodoItem from './TodoItem'

function App() {
  const [todoText, setTodoText] = React.useState();
  const [todoItems, setTodoItems] = React.useState([]);

  function readTodoText(event) {
    const newValue = event.target.value;
    setTodoText(newValue);
  }

  function addTodoItem() {
    setTodoItems((prevTodoItems) => {
      return [...prevTodoItems, todoText];
    });
    setTodoText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={todoText} onChange={readTodoText} />
        <button onClick={addTodoItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((item) => (
            <TodoItem text={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
