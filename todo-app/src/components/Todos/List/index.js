import React, { useState } from 'react';


function List({ tasks }) {
    const [checked, setChecked] = useState([{ taskStatus: '' }]);





    return (

        <div class="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
            <ul className='todo-list'>
                {
                    tasks.map((item, index) => {
                        <li key={index} className='completed'>
                            <div className='view'>
                                <input value={item} type="checkbox" onChange={handleCheck} />
                                <span className={isChecked(item)}>{tasks.item}</span>
                            </div>
                        </li>
                    })
                }

            </ul>

        </div>
    )
}

export default List;
