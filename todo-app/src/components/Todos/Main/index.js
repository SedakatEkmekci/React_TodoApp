import React, { useEffect, useState } from 'react';

function Main({ tasks, setTasks }) {

    const [formValue, setFormValue] = useState(...tasks);


    const selectAll = () => {
        let value = tasks.map((i) => {
            console.log(i);
            i.isDone = true;
        });
        setFormValue(value);

        console.log('All inputs are selected', tasks);
    };

    const changeInput = (i) => {
        tasks[i].isDone = true;
        setFormValue([...tasks, tasks[i]]);

        console.log(tasks);
    };

    const deleteItem = (i) => {
        let removedItem = tasks[i].id - 1;
        tasks.splice(removedItem, 1);
        setFormValue([...tasks, tasks[i]]);
    };

    return (
        <section className="main">
            <input className="toggle-all"
                type="radio"
                name="completed"
                value={formValue.isDone}
                onChange={selectAll}

            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((tasks, i) => (

                        <><li className="completed" key={tasks.id}>

                            <div className="view">
                                <input
                                    name="isDone"
                                    value={formValue.isDone}
                                    className="toggle"
                                    type="checkbox"
                                    onChange={e => changeInput(i)} />

                                <span> {tasks.taskTitle}</span>
                                <button className='destroy' onClick={e => deleteItem(i)}>X</button>
                            </div>
                        </li>

                        </>
                    ))
                }
            </ul>
        </section >


    )
}

export default Main;
