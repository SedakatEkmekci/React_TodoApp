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


                        </li>

                    ))
                }

            </ul >
        </div >
    );
}

export default List;

