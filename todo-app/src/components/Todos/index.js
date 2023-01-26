
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List';


function Todos() {
    const [tasks, setTasks] = useState([
        {
            taskTitle: 'Learn Javascript',
            taskStatus: true


        },
        {
            taskTitle: 'Learn React',
            taskStatus: true

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
                <Form addTasks={setTasks} tasks={tasks} />
                <List tasks={tasks}></List>

            </div>
            <div>


            </div>
        </div>
    )
}

export default Todos;