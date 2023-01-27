import React, { useEffect, useState } from 'react';

function Main({ tasks, setTasks }) {

    const [formValues, setFormValues] = useState('');
    const [isCompleted, setIsCompleted] = useState([]);

    const handleOnChange = (event) => {
        let value = tasks.map((tasks, i) => {
            i = isCompleted;
            return !i;
        });
        setIsCompleted(!value);
        console.log(value);
    };
    const changeInput = (event) => {
        let updatedList = [event.target.checked];
        console.log(updatedList);
        updatedList = ![event.target.checked];
        setFormValues(updatedList);
        console.log(updatedList);
    };

    return (
        <section className="main">
            <input className="toggle-all"
                type="radio"
                name="completed"
                value={tasks.taskStatus}
                checked={isCompleted}
                onChange={e => handleOnChange(e)}

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
                                    name="taskStatus"
                                    value={tasks.taskStatus}
                                    className="toggle"
                                    type="radio"
                                    checked={formValues}
                                    onChange={e => changeInput(e)

                                    }
                                />
                                <span>{tasks.taskTitle}</span>
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
