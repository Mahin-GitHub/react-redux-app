import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodo } from '../../redux/state/Todo/TodoSlice';

const CreateTodo = () => {

  const dispatch = useDispatch();
  const taskInput = useRef();
  return (
    <div>
      <input ref={taskInput} type="text" className='border-2 border-black rounded-r-lg p-2 ' />
      <button onClick={() => dispatch(AddTodo(taskInput.current.value))} className='bg-blue-400 p-2 font-bold rounded-lg'>Add Todo</button>
    </div>
  )
}

export default CreateTodo