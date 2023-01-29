
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Todos() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskTitle: 'Learn Javascript',
            isDone: false


        },
        {
            id: 2,
            taskTitle: 'Learn React',
            isDone: false

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
                <Main addTasks={setTasks} tasks={tasks} />
                <Footer tasks={tasks} setTasks={setTasks} setStatus={setStatus} />



            </div>
            <div>


            </div>
        </div>
    )
}

export default Todos;