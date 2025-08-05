import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counter"

function App() {

  const count = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Counter App</h1>
      <button onClick = {() => dispatch(increment())}>
        +
      </button>
      <h4>Count: {count}</h4>
      <button onClick = {() => dispatch(decrement())}>
        -
      </button>
    </>
  )
}

export default App
