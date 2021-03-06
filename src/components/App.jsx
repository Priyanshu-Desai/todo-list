import React from "react";
import TodoItem from './TodoItem'
import InputArea from './InputArea'

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

  function deleteItem(id){
    setTodoItems(prevItems =>  {
      return prevItems.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea text={todoText} readText={readTodoText} addItem={addTodoItem}/>
      <div>
        <ul>
          {todoItems.map((item, index) => (
            <TodoItem key={index} id={index} text={item} onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
