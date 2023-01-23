import { useState, useEffect } from 'react';



function Form({ addTasks, tasks }) {
    const [formInput, setFormInput] =
        useState([{ taskTitle: '', }
        ])

    const handleFormChange = (formInput, event) => {

        let newData = [...formInput];
        newData[formInput][event.target.name] = event.target.value;
        setFormInput(newData);

    }

    const submit = (e) => {
        e.preventDefault();

        addTasks([...tasks, formInput]);
        console.log(formInput);

    }
    return (
        <div>
            <form onSubmit={submit}>


                <div className='new-todo'>
                    <input
                        placeholder='What needs to be done?'
                        name='taskTitle'
                        value={formInput.taskTitle}
                        onChange={e => handleFormChange(formInput, e)}
                        autoFocus />
                    <br />
                    <button onClick={submit}>Add</button>

                </div>


            </form>
        </div>
    )
};

export default Form;
