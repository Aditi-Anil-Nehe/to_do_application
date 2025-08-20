import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import ToDoForm from './Components/ToDoForm'
import About from './Pages/About'
import { TodoProvider } from './Context/TodoContext'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <TodoProvider>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/createTask' element={<ToDoForm/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     </TodoProvider>
     </BrowserRouter>
    </>
  )
}

export default App
