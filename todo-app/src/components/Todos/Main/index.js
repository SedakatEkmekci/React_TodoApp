import React, { useEffect, useState } from 'react';

function Main({ tasks, addTasks }) {



    const [formValue, setFormValue] = useState(...tasks);

    const selectAll = (event) => {
        let value = tasks.map((i) => {
            i = [event.target.value];
            console.log(i);
            return i = true;
        });
        setFormValue(value);
        console.log('All task are selected', value);
    };

    const changeInput = (event) => {
        let check = [event.target.checked];
        let input = [event.target.value];

        if (check = true) {
            console.log('succes');
            input = true;
            setFormValue([...tasks, input]);
            console.log(input)
        }
        else {
            console.log('the task is already done');
        }

    };

    console.log(tasks);

    return (
        <section className="main">
            <input className="toggle-all"
                type="radio"
                name="completed"
                value={formValue.isDone}
                checked=''
                onChange={e => selectAll(e)}

            />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((tasks, i) => (

                        <li className="completed" key={i} >

                            <div className="view">
                                <input
                                    name="isDone"
                                    value={formValue.isDone}
                                    className="toggle"
                                    type="radio"
                                    checked=''
                                    onChange={e => changeInput(e)}


                                />

                                <span > {tasks.taskTitle}</span>
                                <button className='destroy' ></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section >


    )
}

export default Main;
