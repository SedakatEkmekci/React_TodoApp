import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List'

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

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className='todoapp'>
            <div className='header'>
                <h1>Todos</h1>
                {/* <List todos={todos}></List> */}
                <Form addTodos={setTodos} todos={todos}></Form>
            </div>



        </div>
    )
}

export default Todos;
