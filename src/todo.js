import React, { useState } from 'react';

export default function Todo() {
let [task,setTask] =useState();
let [todos, setTodos] = useState([]);

const changeHandler = e =>{
    setTask(e.target.value)
}
const submitHandler = e =>{
    e.preventDefault();
    var newTodos =[...todos,task];
    setTodos(newTodos);
    setTask('')
}

const deleteHandler = (indexValue) =>{
const newTodos = todos.filter((todo,index) => index !== indexValue);
setTodos(newTodos)
}

  return (
    <>
      <div className='container w="50"'>
        <div className='input-group'>
          <input className='form-control' onChange={changeHandler} type='text' value={task}></input>
          <button className='btn btn-primary' onClick={submitHandler}>Add</button>
        </div>
        <ul className='list-group mt-4'>
          {todos.map((todo,index) => {
            return (
              <li className='list-group-item' key={index}>
                <p>{todo}</p>
                <button className='btn btn-danger' onClick={() => deleteHandler(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
