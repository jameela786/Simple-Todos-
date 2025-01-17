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
  state = {finalTodosList: initialTodosList}
  onDeleteTodo = id => {
    const {finalTodosList} = this.state
    const filteredList = finalTodosList.filter(eachItem => eachItem.id !== id)
    this.setState({finalTodosList: filteredList})
  }
  render() {
    const {finalTodosList} = this.state
    return (
      <div className="bg_container">
        <div className="card_Container">
          <h1 className="main_head">Simple Todos</h1>
          <ul>
            {finalTodosList.map(each => (
              <TodoItem
                key={each.id}
                todoDetails={each}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
