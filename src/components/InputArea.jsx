import React from 'react'

function InputArea(props) {
  return (
  <div className="form">
    <input type="text" value={props.text} onChange={props.readText} />
    <button onClick={props.addItem}>
      <span>Add</span>
    </button>
  </div>
)
}

export default InputArea
