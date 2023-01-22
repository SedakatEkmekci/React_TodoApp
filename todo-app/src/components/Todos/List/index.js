import { useState } from 'react';


function List({ todos }) {
    const [filterText, setFilterText] = useState('');

    return (
        <div className='main'>
            <input className='toggle-all' type='checkbox' value={ } />
            <label htmlFor="toggle-all">Mark all as completed</label>

            <ul className='todo-list'>
                {
                    todos.map((todo, i) => (
                        <li key={i}>
                            <div className='completed'>
                                <input className='toggle' type='checkbox' />
                                <span>{todo.name}</span>

                            </div>

                        </li>

                    ))}

            </ul>
        </div>
    );
}

export default List;


