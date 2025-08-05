import { useEffect, useState } from "react";

function App() {

  const [c1, setC1] = useState(0)
  const [c2, setC2] = useState(0)
  const [c3, setC3] = useState(0)

  const [leader, setLeader] = useState('')

  useEffect(() => {
    if (c1 > c2 && c1 > c3) {
      setLeader('Candidate 1')
    } else if (c2 > c1 && c2 > c3) {
      setLeader('Candidate 2')
    } else if (c3 > c1 && c3 > c2) {
      setLeader('Candidate 3')
    } else {
      setLeader('Tie')
    }
  }, [c1, c2, c3])

  return (
    <>
      <h1>Voting App</h1>
      <button onClick = {() => setC1(c1 + 1)}>Vote for Candidate 1</button>
      <h5>Votes for Candidate 1: {c1}</h5>
      <button onClick = {() => setC2(c2 + 1)}>Vote for Candidate 2</button>
      <h5>Votes for Candidate 2: {c2}</h5>
      <button onClick = {() => setC3(c3 + 1)}>Vote for Candidate 3</button>
      <h5>Votes for Candidate 3: {c3}</h5>
      <h4>Current leader: {leader}</h4>
    </>
  )
}

export default App
