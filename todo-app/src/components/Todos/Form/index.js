import { useState, useEffect } from 'react';

function Form({ addTasks, tasks }) {
    const [formInput, setFormInput] = useState([{ taskTitle: '', taskStatus: '' }]);
    const [isChecked, setIsChecked] = useState(false);


    const handleOnChange = () => {
        setIsChecked(!isChecked);
        //console.log(isChecked);

    };

    const handleFormChange = (formInput, event) => {

        let newData = [...formInput];
        newData[0][event.target.name] = event.target.value;
        setFormInput(newData);


    };


    const submit = (e) => {
        e.preventDefault();
        addTasks([formInput, ...tasks]);

        //console.log(formInput);

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
                    <input type="checkbox"
                        name='taskStatus'
                        value={formInput.taskStatus}
                        onChange={handleOnChange}
                        checked={isChecked}
                        autoFocus />


                </div>


            </form>
        </div>
    )
};

export default Form;
