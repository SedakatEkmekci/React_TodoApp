import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List'

function Tasks() {
    const [tasks, setTasks] = useState([
        {
            taskTitle: 'Learn Javascript',
            taskId: '1'

        },
        {
            taskTitle: 'Learn React',
            taskId: '2'
        },

        {
            TaskTitle: 'Have a life!',
            taskId: '3'

        }
    ]
    );


    useEffect(() => {
        console.log(tasks);
    }, [tasks]);

    return (
        <div className='todoapp'>
            <div className='header'>
                <h1>Todos</h1>

                <Form addTodos={setTodos} tasks={tasks}></Form>
                <List tasks={tasks}></List>

            </div>



        </div>
    )
}

export default Tasks;
