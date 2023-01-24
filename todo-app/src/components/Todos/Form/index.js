import { useState, useEffect } from 'react';

function Form({ addTasks, tasks }) {
    const [formInput, setFormInput] = useState([{ taskTitle: '', taskStatus: '' }]);

    const toggle = (formInput, event) => {
        let value = [...formInput];
        console.log(event.target.value);
        value[0][event.target.name] = event.target.value;
        setFormInput(value);
    };
    const handleFormChange = (formInput, event) => {

        let newData = [...formInput];
        newData[0][event.target.name] = event.target.value;
        setFormInput(newData);

    };

    const submit = (e) => {
        e.preventDefault();

        addTasks([formInput, ...tasks]);
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
                    <input type="text"
                        name='taskStatus'
                        value={formInput.taskStatus}
                        onChange={e => toggle(formInput, e)}
                        autoFocus />
                    <br />
                    <button onClick={submit}>Add</button>

                </div>


            </form>
        </div>
    )
};

export default Form;
