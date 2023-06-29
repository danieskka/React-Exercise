import { useState } from "react";

const Home = () => {

    const [value, setValue] = useState({
      text: ''
    });

    const handleChange = (e) => {
      setValue(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(value)
    }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Escribe algo</label>
          <input name ="text" type="text" onChange={handleChange}></input>
          <br/>
          <button>ADD</button>
        </form>
        <p>{JSON.stringify(value)}</p>
      </>
  )
};

export default Home;