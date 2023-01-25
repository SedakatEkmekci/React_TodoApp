import React, { useState } from 'react';


function List({ tasks }) {

    const handleOnChecked = () => {


    }
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((tasks, i) => (
                        <li className="completed" key={i}>
                            <div className="view">
                                <span>{tasks.taskTitle}</span>
                                <input
                                    className="toggle"
                                    type="checkbox"
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
