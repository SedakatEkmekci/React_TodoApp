import React, { useEffect, useState } from 'react';

function List({ tasks }) {

    const [isChecked, setIsChecked] = useState('');
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
        let updatedList = [!event.target.value];

        if (event.target.checked) {
            updatedList = [event.target.value];
        }

        setIsChecked(updatedList);
        console.log(updatedList);
    };



    return (
        <section className="main">
            <input className="toggle-all"
                type="checkbox"
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
                                <span>{tasks.taskTitle}</span>


                                <input
                                    name="taskStatus"
                                    value={tasks.taskStatus}
                                    className="toggle"
                                    type="checkbox"
                                    checked={i.isChecked}
                                    onClick={e => changeInput(e)}



                                />


                            </div>
                        </li>

                    ))

                }


            </ul>
        </section>


    )
}

export default List;
