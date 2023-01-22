import { useState } from 'react';


function List({ tasks }) {
    const [filterText, setFilterText] = useState('');

    return (
        <div className='main'>
            <input className='toggle-all' type='checkbox' />
            <label htmlFor="toggle-all">Mark all as completed</label>

            <ul className='todo-list'>
                {
                    tasks.map((task, i) => (
                        <li key={i}>
                            <div className='completed'>

                                <input className='toggle' type='checkbox' />
                                <span>{task.taskTitle}</span>




                            </div>

                        </li>

                    ))}

            </ul>
        </div>
    );
}

export default List;


