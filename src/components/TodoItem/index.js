// Write your code here
import Component from 'react'
import './index.css'
const TodoItem = props => {
  const {todoDetails, onDeleteTodo} = props
  const {id, title} = todoDetails
  const onDeleteItem = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="itemContainer">
      <p className="titleStyle">{title}</p>
      <button className="deleteBtn" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
