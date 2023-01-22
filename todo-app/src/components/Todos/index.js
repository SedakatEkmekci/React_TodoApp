import { useState } from 'react';
import Form from './Form';

function Todos() {
    const [todos, setTodos] = useState(
        {
            todo: 'Learn Javascript',
            indexNo: '1'
        },
        {
            todo: 'Learn React',
            indexNo: '2'
        },
        {
            todo: 'Have a life!',
            indexNo: '3'
        });

    return (
        <div className='todos'>
            <div className='header'>
                <h1>Todos</h1>
            </div>


        </div>
    )
}

export default Todos;
