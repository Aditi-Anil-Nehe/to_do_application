import React , {useState , useReducer} from 'react';

const [name,setName]= useState()
const [description , setDescription]= useState()

function handleSubmit(event){
    event.preventDefault()
    Payload = {name:name , description: description}
    dispatch({type:'ADD_TODO',Payload:Payload})
}



const ToDoForm = () => {
  return (
    <div>
    <h3>Create new ToDo</h3>
    <form onSubmit={handleSubmit} className='card shadow-sm mb-4'>


    </form>
    </div>
  )
}

export default ToDoForm
