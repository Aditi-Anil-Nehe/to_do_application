
import React, { createContext, useEffect, useReducer } from 'react'
import{initialState , reducer} from '../reducer/TodoReducer.js'

const TodoContext = createContext();

const TodoProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , initialState ,(init)=>{
        try{
        TodoFromLocal = JSON.parse(localStorage.getItem('todosBatch51'));
        return TodoFromLocal?.todos;
    }catch{
        return init;
    }
});
   
 useEffect(()=>{
    localStorage.setItem("todosBatch51", JSON.stringify(state));
 },[state]);
     


  return (

    <TodoContext.Provider value={{state , dispatch}}>
       {children}
    </TodoContext.Provider>
  )

}

export { TodoContext, TodoProvider}
