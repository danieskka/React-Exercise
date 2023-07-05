import { useState } from "react";
import ToDoItem from '../List/Item/Item';
import data from './data';
import { v4 as uuidv4 } from "uuid";
import './List.css';

const ToDoList = () => {
  
  const [toDo, setList] = useState(data);
  const [beginVal, setBeginVal] = useState("");
  const [ongoingVal, setOngoingVal] = useState("");
  const [conclusionVal, setConclusionVal] = useState("");
  const [endVal, setEndVal] = useState("");

  const paintItems = () => toDo.map((item, i) => <ToDoItem 
  begin={item.begin} ongoing={item.ongoing} conclusion={item.conclusion} end={item.end} key={uuidv4()} deleteItem = { () => deleteItem(i)}/>)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const begin = e.target.begin.value;
    const ongoing = e.target.ongoing.value;
    const conclusion = e.target.conclusion.value;
    const end = e.target.end.value;

    const newTask = {begin, ongoing, conclusion, end};

    setList([...toDo, newTask]);

    if (newTask.length > 6) {
      setList([...toDo, newTask]);
    } else {
      alert("Por favor, introduce una tarea con al menos 6 caracteres.");
    }
    
    }

    const deleteTasks = () => {
      const confirmed = confirm('Are you sure to proceed to delete ALL tasks?')
      confirmed ? setList([]) :alert("None was deleted")
    }

    const reloadTasks = () => {
      const confirmed = confirm('Would you like to reload the tasks?')
      confirmed ? setList(data) :alert('None task was reload')
    }
    
    const deleteItem = (i) => {
      setList(toDo.filter((item, j) => i !== j));
    }

    const handleInput = (e) => {

      const { name , value} = e.target;

      switch (name) {
        case "begin":
          setBeginVal(value)
          break;
        case "ongoing":
          setOngoingVal(value);
          break;
        case "conclusion":
          setConclusionVal(value);
          break;
        case "end":
          setEndVal(value);
          break;
        default:
          break;
      }
    }

  return (
    <section>
        <h2>TO DO LIST</h2>

        <h3>Create a new List</h3>

        <form onSubmit={handleSubmit}>

          <label htmlFor="text">First Task</label><br />
          <input type="text" name="begin" value={beginVal} onChange={handleInput}/><br />
          
          <label htmlFor="ext">Second Task</label><br />
          <input type="text" name="ongoing" value={ongoingVal} onChange={handleInput}/><br />
          
          <label htmlFor="text">Third Task</label><br />
          <input type="text" name="conclusion" value={conclusionVal} onChange={handleInput}/><br />

          <label htmlFor="text">Fourth Task</label><br />
          <input type="text" name="end"/><br value={endVal} onChange={handleInput}/>
      
          <button type="submit" disabled={beginVal.length === 0 && ongoingVal.length === 0 && conclusionVal.length === 0 && endVal.length === 0}>
          ADD
          </button>

          
        </form>

        <button onClick={deleteTasks}>Delete All</button>
        <button onClick={reloadTasks}>Reload tasks</button>

        {paintItems()}
    </section>
  )
}

export default ToDoList;
