import { useState } from 'react';

export default function MyForm() {

  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState("Enter text")
  const [myCar, setMyCar] = useState("volvo")

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${inputs.username}, Age: ${inputs.age}`)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>Name:
            <input 
                type="text"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
            />
        </label>
        <br></br> <br></br>
        <label>Age:
            <input
                type="text"
                name="age"
                value={inputs.age || ""}
                onChange={handleChange}
            />
        </label>
        <br></br> <br></br>
        <label>Feedback:
            <textarea
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
            />
        </label>
        <br></br> <br></br>
        <label>Select a car:
            <select value={myCar} onChange={(e) => setMyCar(e.target.value)}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </label>
        <br></br> <br></br>
        <input type="submit" />
        </form>
    </>
  )
}
