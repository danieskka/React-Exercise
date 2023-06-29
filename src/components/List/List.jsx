import { useState } from "react";
import ToDoItem from '../List/Item/Item';
import data from './data';
import { v4 as uuidv4 } from "uuid";
import './List.css';

const ToDoList = () => {
  
  const [toDo, setList] = useState(data);

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

    const confirmed = confirm('¿Would you like to add a new to do list?')

      confirmed?
            setList([...toDo, newTask])
            :alert("None task was added");
    }

    const deleteTasks = () => {
      const confirmed = confirm('Are you sure to proceed to delete ALL tasks?')
      confirmed?
      setList([])
      :alert("None was deleted")
    }

    const reloadTasks = () => {
      const confirmed = confirm('Would you like to reload the tasks?')
      confirmed?
      setList(data)
      :alert('None task was reload')
    }
    
    const deleteItem = (i) => {
      setList(toDo.filter((item, j) => i !== j));
    }

  return (
    <section>
        <h2>TO DO LIST</h2>

        <h3>Create a new List</h3>

        <form onSubmit={handleSubmit}>

          <label htmlFor="text">First Task</label><br />
          <input type="text" name="begin" /><br />
          
          <label htmlFor="ext">Second Task</label><br />
          <input type="text" name="ongoing" /><br />
          
          <label htmlFor="text">Third Task</label><br />
          <input type="text" name="conclusion"/><br />

          <label htmlFor="text">Fourth Task</label><br />
          <input type="text" name="end"/><br />
      
          <button type="submit">ADD</button>


        </form>

        <button onClick={deleteTasks}>Delete All</button>
        <button onClick={reloadTasks}>Reload tasks</button>

        {paintItems()}
    </section>
  )
}

export default ToDoList;
