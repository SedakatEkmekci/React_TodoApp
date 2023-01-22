import { useState } from 'react';
import Form from './Form';

function Todos() {
    const [todos, setTodos] = useState(
        {
            todo: 'Learn Javascript',

        },
        {
            todo: 'Learn React',
        },

        {
            todo: 'Have a life!',

        });

    return (
        <div className='todoapp'>
            <div className='header'>
                <h1>Todos</h1>
                <Form />
            </div>



        </div>
    )
}

export default Todos;
