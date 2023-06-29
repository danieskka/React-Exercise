import "./Item.css"

const ToDoItem = ({begin,ongoing,conclusion,end,deleteItem}) => {
  return (
    <ul className="toDo_item">
      <li>{begin}</li>
      <li>{ongoing}</li>
      <li>{conclusion}</li>
      <li>{end}</li>
      <button onClick={deleteItem}>Delete Task</button>
    </ul>
  )
};

export default ToDoItem;
