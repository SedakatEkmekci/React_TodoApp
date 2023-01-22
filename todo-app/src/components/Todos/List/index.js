import { useState } from 'react';


function List({ tasks, setTasks }) {


    return (
        <div className='main'>
            <input className='toggle-all' type='checkbox' />
            <label htmlFor="toggle-all">Mark all as completed</label>

            <ul className='todo-list'>
                {
                    tasks.map((tasks, i) => (
                        <li key={i}>
                            <span>{tasks.taskTitle}</span>
                            <span>{tasks.taskStatus}</span>

                        </li>

                    ))
                }

            </ul >
        </div >
    );
}

export default List;

