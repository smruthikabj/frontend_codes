import { useState } from "react";

function App() {

const[count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>My Counter App</h1>
      <button onClick={() => increase()}>+</button>
      <h3>{count}</h3>
      <button onClick={() => decrease()}>-</button>
    </>
  )
}

export default App
