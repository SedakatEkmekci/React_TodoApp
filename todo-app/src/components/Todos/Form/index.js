import { useState, useEffect } from 'react';

function Form({ addTasks, tasks }) {
    const [formInput, setFormInput] = useState([{ taskTitle: '', taskStatus: '' }]);

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
            <form>


                <div className='new-todo'>
                    <input
                        placeholder='What needs to be done?'
                        name='taskTitle'
                        value={formInput.taskTitle}
                        onChange={e => handleFormChange(formInput, e)}
                        autoFocus />
                    <input
                        placeholder='is it completed?'
                        name='taskStatus'
                        value={formInput.taskStatus}
                        onChange={e => handleFormChange(formInput, e)}
                        autoFocus />
                    <button onClick={submit}>Add</button>
                </div>


            </form>
        </div>
    )
};

export default Form;
