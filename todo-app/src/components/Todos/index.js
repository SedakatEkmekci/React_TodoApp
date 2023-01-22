import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List'

function Todos() {
    const [todos, setTodos] = useState([
        {
            name: 'Learn Javascript',

        },
        {
            name: 'Learn React',
        },

        {
            name: 'Have a life!',

        }
    ]
    );



    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className='todoapp'>
            <div className='header'>
                <h1>Todos</h1>

                <Form addTodos={setTodos} todos={todos}></Form>
                <List todos={todos}></List>

            </div>



        </div>
    )
}

export default Todos;
