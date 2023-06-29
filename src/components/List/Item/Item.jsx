import "./Item.css"

const ToDoItem = ({begin,ongoing,conclusion,end,deleteItem}) => {
  return (
    <ul>
      <li>Empezamos con la siguiente tarea: {begin}</li>
      <li>Luego deberemos: {ongoing}</li>
      <li>En conclusion haremos: {conclusion}</li>
      <li>Para finalizar se deberá: {end}</li>
      <button onClick={deleteItem}>Delete Task</button>
    </ul>
  )
};

export default ToDoItem;
