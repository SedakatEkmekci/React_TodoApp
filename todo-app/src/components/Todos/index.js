
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List'

function Tasks() {
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
                <List tasks={tasks}></List>

            </div>



        </div>
    )
}

export default Tasks;