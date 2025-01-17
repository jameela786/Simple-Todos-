import './index.css'

const TodoItem = props => {
  const {
    todoDetails,
    onDeleteTodo,
    onToggleCompletion,
    onToggleEditing,
    onSaveEdit,
  } = props
  const {id, title, isCompleted, isEditing} = todoDetails

  const onDeleteItem = () => {
    onDeleteTodo(id)
  }

  const onCompleteItem = () => {
    onToggleCompletion(id)
  }

  const onEditItem = () => {
    onToggleEditing(id)
  }

  const onSaveTitle = event => {
    const updatedTitle = event.target.value
    onSaveEdit(id, updatedTitle)
  }

  return (
    <li className={`itemContainer ${isCompleted ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onCompleteItem}
        className="completeCheckbox"
      />
      {isEditing ? (
        <input
          type="text"
          defaultValue={title}
          onBlur={onSaveTitle}
          className="editInput"
        />
      ) : (
        <p className="titleStyle">{title}</p>
      )}
      <button className="editBtn" type="button" onClick={onEditItem}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className="deleteBtn" type="button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
