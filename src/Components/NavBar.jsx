import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
   <>
  <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3" to="#">ToDo's</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active fs-4" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-4" to="/createTask">ToDoForm</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default NavBar
