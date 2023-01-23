import React from 'react';


function List(tasks, setTasks) {

    return (
        <div className='app'>
            <ul>
                {tasks.map((input, index) => {
                    return (
                        <li key={index}>{tasks.input}</li>
                    )
                })}
            </ul>
        </div>


    )
}

export default List;
