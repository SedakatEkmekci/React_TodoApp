
import { useEffect, useState } from 'react';
import Form from './Form';


function Todos() {
    const [tasks, setTasks] = useState([
        {
            taskTitle: 'Learn Javascript',
            taskStatus: 'processing'

        },
        {
            taskTitle: 'Learn React',
            taskStatus: 'completed'
        },
    ]
    );


    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <div className='todoapp'>
            <div className='header'>
                <h1>Todos</h1>
                <Form addTodos={setTasks} tasks={tasks}></Form>
            </div>
        </div>
    )
}

export default Todos;