import React from 'react'
import CreateTodo from '../../Components/Todo/CreateTodo'
import TodoList from '../../Components/Todo/TodoList'

const TodoPage = () => {
  return (
    <div>
        <h2>My To Do page</h2>
        <CreateTodo/>
        <TodoList/>
    </div>
  )
}

export default TodoPage