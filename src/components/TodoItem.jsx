import React from 'react'

function TodoItem(props) {
  const [isDone, setIsDone] = React.useState(false)

  function handleClick(){
    setIsDone(prevValue => {return !prevValue})
  }

  return <div onClick={handleClick}>
  <li style={{textDecoration: isDone ? 'line-through' : 'none'}}>{props.text}</li>
  </div>
}
export default TodoItem
