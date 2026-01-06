import React from 'react'
import { useSelector } from 'react-redux'
import TodoDeleteAlert from './TodoDeleteAlert';
import TodoEditAlert from './TodoEditAlert';

const TodoList = () => {

    const todoItem = useSelector((state) => state.todo.value);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task Name</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        todoItem.map((item, index) => <tr>

                            <td>{index}</td>
                            <td>{item}</td>
                            <td><button 
                            onClick={()=>TodoEditAlert(index,item)} className='bg-blue-600 px-1 rounded-sm'>Edit</button></td>
                            <td><button onClick={() => TodoDeleteAlert(index)} className='bg-red-600 px-1 rounded-sm'>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    )
}

export default TodoList