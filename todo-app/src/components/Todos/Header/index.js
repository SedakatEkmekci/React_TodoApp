import { useState, useEffect } from 'react';

const initialFormValues = { taskTitle: '', taskStatus: '' }
function Header({ addTasks, tasks }) {
    const [formInput, setFormInput] = useState(initialFormValues);

    useEffect(() => {
        setFormInput(initialFormValues);
    }, [tasks]);

    const handleFormChange = (event) => {

        let newData = { taskTitle: '', taskStatus: '' };
        newData[event.target.name] = event.target.value;
        setFormInput(newData);
    };

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
                        onChange={e => handleFormChange(e)}
                        autoFocus />


                </div>


            </form>
        </div>
    )
};

export default Header;
