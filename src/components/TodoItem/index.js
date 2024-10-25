import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    // const {todoDetails} = this.props
    // const {updatedTitle} = this.state
    this.setState({editing: false})
    // Call a function to save updated title (not implemented in this code)
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSave} type="button">
              Save
            </button>
          </>
        ) : (
          <div className="each-container">
            <input
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
              className="checkbox"
            />
            <p className="title">{todoDetails.title}</p>
            <div className="button-container">
              <button
                onClick={this.handleEdit}
                type="button"
                className="Edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    )
  }
}

export default TodoItem
