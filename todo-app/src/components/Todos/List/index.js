import { useState } from 'react';


function List({ tasks, setTasks }) {


    return (
        <div className='main'>
            <input className='toggle-all' type='checkbox' />
            <label htmlFor="toggle-all">Mark all as completed</label>

            <ul className='todo-list'>
                {
                    tasks.map((task, i) => (
                        <li key={i}>
<<<<<<< HEAD
    <div className='completed' >

=======
                            <div className='completed'>
>>>>>>> parent of 909a8a2 (update)
            <input className='toggle' type='checkbox' />
            <span>{task.name}</span>

        </div>

    </li>

                    ))
}

            </ul >
        </div >
    );
}

export default List;


