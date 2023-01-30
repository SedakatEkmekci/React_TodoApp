import React, { useEffect, useState } from 'react';

function Main({ tasks, setTasks }) {

    const [formValue, setFormValue] = useState(...tasks);

    const completeAll = () => {
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

    const deleteItem = (index) => {
        let keep = tasks[index];
        const removedItem = tasks.filter((e) => e !== keep);
        tasks.splice(index, 1);
        setFormValue([...tasks, removedItem]);

    };




    return (
        <section className="main">
            <input className="toggle-all"
                type="radio"
                name="completed"
                value={formValue.isDone}
                onChange={completeAll}


            />
            <label className="toggle-all">
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
                                    type="radio"
                                    onChange={e => changeInput(i)} />

                                <span> {tasks.taskTitle}</span>
                                <button className='destroy' onClick={e => deleteItem(i)}></button>
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
