
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';


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
                <Header addTasks={setTasks} tasks={tasks} />
                <Main tasks={tasks} />

            </div>
            <div>


            </div>
        </div>
    )
}

export default Todos;