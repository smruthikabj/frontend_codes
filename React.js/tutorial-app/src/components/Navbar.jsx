import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       <NavLink to = "/">Welcome</NavLink>
       <br></br>
       <NavLink to = "/java">Java</NavLink>
       <br></br>
       <NavLink to = "/python">Python</NavLink>
       <br></br>
       <NavLink to = "/golang">GoLang</NavLink>
       <br></br>
    </>
  )
}
