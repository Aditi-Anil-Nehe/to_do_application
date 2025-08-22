import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext'


const ToDoList = () => {

  const { state, dispatch } = useContext(TodoContext);
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState({});

  const filteredTodo = state.todos.filter(
    (todo) => {
      const matchesSearch =
        todo.name.toLowerCase().includes(search.toLowerCase()) ||
        todo.description.toLowerCase().includes(search.toLowerCase())

      const matchesFilter =
        filter === "All"
          ? true
          : filter === "COMPLETE"
            ? todo.isComplete
            : !todo.isComplete;

      return matchesSearch && matchesFilter;
    });

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };


  return (
    <div style={{ padding: "20px" }}>

      <input
        type='text'
        placeholder='search tasks....'
        onChange={(e) => setSearch(e.target.value)}
       className="form-control mb-3 shadow-sm"
        style={{ borderRadius: "10px" }} />


      <div className='dropdown d-flex justify-content-end mb-3'>
        <button

          className="btn btn-outline-primary dropdown-toggle shadow-sm"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter <i className="fa-solid fa-filter"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item"
              onClick={() => setFilter("All")}
            >
              All Tasks
            </a>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={() => setFilter("COMPLETE")}
            >
              Completed ✅
            </a>
          </li>
          <li>
            <a className="dropdown-item"
              onClick={() => setFilter("INCOMPLETE")}
            >
              Incompleted ❌
            </a>
          </li>
        </ul>
      </div>





      <h2 className="mb-4 text-center">All Tasks</h2>
      {filteredTodo.length === 0 ? (
        <p className="text-center text-muted">No Tasks Yet !</p>
      ) : (
        <div className='row'>
          {filteredTodo.map((todo) => (
            <div key={todo.id} className='col-sm-12 col-md-6 col-lg-3'>
              <div className='card shadow-sm h-100 border-0 rounded-3'>
                <div className='card-body d-flex flex-column'>
                  <h5 className='card-title text-primary'>
                    <strong>{todo.name}</strong></h5>


                  <p className='card-text'> {expanded[todo.id]
                    ? todo.description
                    : todo.description.length > 50
                      ? todo.description.substring(0, 50) + "..."
                      : todo.description}</p>

                  {todo.description.length > 50 && (
                    <button
                      className="btn btn-link p-0 mb-2"
                      onClick={() => toggleExpand(todo.id)}
                    >
                      {expanded[todo.id] ? "Show Less" : "Show More"}
                    </button>
                  )}


                  <span style={{ marginLeft: "10px" }}>
                    {todo.isComplete ? "✅" : "❌"}
                  </span>
                  <button style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                    }
                    className='btn btn-warning'
                  >Toggle</button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch({ type: "DELETE_TODO", payload: todo.id })
                    }
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ToDoList
