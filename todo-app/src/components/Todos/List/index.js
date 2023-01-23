import React from 'react';

function List({ tasks }) {
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label for="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    tasks.map((tasks) => (
                        <li>{tasks.taskTitle}</li>

                    ))}
            </ul>



        </section>

    )
}

export default List;
