
import { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Todos() {
    const [tasks, setTasks] = useState([
        {
            taskTitle: 'Learn Javascript',
            isDone: false


        },
        {
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
                <Main tasks={tasks} />
                <Footer>
                </Footer>


            </div>
            <div>


            </div>
        </div>
    )
}

export default Todos;