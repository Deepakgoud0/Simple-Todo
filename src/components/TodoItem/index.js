import './index.css'

const TodoItem = props => {
  const {todo, deleteUser} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="todo-item-container">
      <p className="todo-title"> {title} </p>
      <button className="delete-button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
