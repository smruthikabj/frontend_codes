import { Route, Routes } from 'react-router-dom'
import GoLang from './pages/GoLang'
import Java from './pages/Java'
import Python from './pages/Python'
import Welcome from './pages/Welcome'

function App() {

  return (
    <>
      <h1>Tutorial App</h1>
      <Routes>
        <Route path = '/' element = {<Welcome />} />
        <Route path = '/java' element = {<Java />} />
        <Route path = '/python' element = {<Python />} />
        <Route path = 'golang' element = {<GoLang />} />
      </Routes>
    </>
  )
}

export default App
