import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    finalTodosList: initialTodosList,
    todoInputValue: '',
  }

  onDeleteTodo = id => {
    const {finalTodosList} = this.state
    const filteredList = finalTodosList.filter(eachItem => eachItem.id !== id)
    this.setState({finalTodosList: filteredList})
  }

  onChangeInput = event => {
    this.setState({todoInputValue: event.target.value})
  }

  onToggleCompletion = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.finalTodosList.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      )
      return {finalTodosList: updatedTodos}
    })
  }

  onToggleEditing = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.finalTodosList.map(todo =>
        todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo,
      )
      return {finalTodosList: updatedTodos}
    })
  }

  onSaveEdit = (id, updatedTitle) => {
    this.setState(prevState => {
      const updatedTodos = prevState.finalTodosList.map(todo =>
        todo.id === id
          ? {...todo, title: updatedTitle, isEditing: false}
          : todo,
      )
      return {finalTodosList: updatedTodos}
    })
  }

  onClickAdd = () => {
    const {todoInputValue, finalTodosList} = this.state
    if (todoInputValue.trim() !== '') {
      // Split the input value by space
      const [title, numberOfTodos] = todoInputValue.split(' ')
      const num = parseInt(numberOfTodos, 10)

      // Create multiple todos with the same title
      const newTodos = []
      for (let i = 0; i < num; i += 1) {
        const newTodo = {
          id: finalTodosList.length + i + 1,
          title,
          isCompleted: false,
          isEditing: false,
        }
        newTodos.push(newTodo)
      }

      this.setState(prevState => ({
        finalTodosList: [...prevState.finalTodosList, ...newTodos],
        todoInputValue: '',
      }))
    }
  }

  render() {
    const {finalTodosList, todoInputValue} = this.state

    return (
      <div className="bg_container">
        <div className="card_Container">
          <h1 className="main_head">Simple Todos</h1>
          <div className="inputFieldContainer">
            <input
              type="text"
              name="todoInput"
              value={todoInputValue}
              className="InputField"
              onChange={this.onChangeInput}
              placeholder="Enter todo title"
            />

            <button type="button" className="addBtn" onClick={this.onClickAdd}>
              Add
            </button>
          </div>

          <ul>
            {finalTodosList.map(each => (
              <TodoItem
                key={each.id}
                todoDetails={each}
                onDeleteTodo={this.onDeleteTodo}
                onToggleCompletion={this.onToggleCompletion}
                onToggleEditing={this.onToggleEditing}
                onSaveEdit={this.onSaveEdit}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
