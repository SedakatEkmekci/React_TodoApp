import { useState } from 'react';

function Footer({ tasks, setTasks }) {

    const clearAll = (e) => {
        setTasks(tasks.filter((tasks) => tasks.isDone === ''));
    };

    const selectedButton = (e) => {
        if (e.target.id === 'All') {
            setTasks(tasks);
            console.log('All tasks are showed:', tasks);
        };
        if (e.target.id === 'Active') {
            setTasks(tasks.filter((tasks) => tasks.isDone === false));
            console.log('Active tasks are showed:', tasks);
        };
        if (e.target.id === 'Completed') {
            setTasks(tasks.filter((tasks) => tasks.isDone === true));
            console.log('Completed tasks are showed:', tasks);
        };
    }



    return (
        <section className="footer">

            <ul className="filters">
                <li>
                    <span onClick={selectedButton} id='All'>All</span>
                </li>
                <li>
                    <span onClick={selectedButton} id='Active'>Active</span>
                </li>
                <li>
                    <span onClick={selectedButton} id='Completed'>Completed</span>
                </li>

            </ul>
            <button className="clear-completed" onClick={clearAll} >
                Clear completed
            </button>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://github.com/SedakatEkmekci">Sedakat Ekmekçi</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </section>


    )

}

export default Footer;
