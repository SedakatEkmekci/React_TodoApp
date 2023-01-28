import React, { useEffect, useState } from 'react';

function Main({ tasks }) {

    const [formValue, setFormValue] = useState(...tasks);
    const [isChecked, setisChecked] = useState('');

    const selectAll = (event) => {
        let value = tasks.map((i) => {
            console.log(i);
            i.isDone = true;
        });
        setFormValue(value);
        setisChecked(!isChecked);
        console.log('All inputs are selected', tasks);
    };

    const changeInput = (event, i) => {
        tasks[i].isDone = true;
        setFormValue([...tasks, tasks[i]]);

        console.log(tasks);
    };



    return (
        <section className="main">
            <input className="toggle-all"
                type="radio"
                name="completed"
                value={formValue.isDone}
                checked={isChecked}
                onChange={e => selectAll(e)}

            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((tasks, i) => (

                        <><li className="completed" key={tasks.i}>

                            <div className="view">
                                <input
                                    name="isDone"
                                    value={formValue.isDone}
                                    className="toggle"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={e => changeInput(e, i)} />

                                <span> {tasks.taskTitle}</span>
                                <button className='destroy'></button>
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
