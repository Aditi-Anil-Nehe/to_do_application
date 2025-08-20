import React, { useContext, useReducer, useState } from 'react'

import {TodoContext } from '../Context/TodoContext'


const ToDoForm = () => {

  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const {dispatch} = useContext(TodoContext)

  function handleSubmit(event) {
    event.preventDefault()

    try{
      console.log(name, description)
      const payload = {name:name, description:description}
      dispatch({type:'ADD_TODO', payload:{name,description}})
    }
    catch(error){
      console.log(error)
    }
    
  }
  return (
    <div className='container w-50 mx-auto border shadow mt-5 rounded-2 p-3'>
      <h1 className='text-center text-success'><b>To Do Application</b></h1>
      <h3>Create a new ToDo </h3>
      <form onSubmit={handleSubmit} className='card shadow-sm mb-4'>
        <div className='mb-3'>
          <label className='form-label'>Task Name</label>
          <input type='text' className='form-control' placeholder='e.g., learn react' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Description</label>
          <textarea className='form-control' placeholder='Details about the task' value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>

        <button type='submit' className='btn btn-primary text-center'>Add Task</button>
      </form>
    </div>
  )
}

export default ToDoForm