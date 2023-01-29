import { useState, useEffect } from 'react';

const initialFormValues = { id: '', taskTitle: '', isDone: '' }

function Header({ addTasks, tasks }) {
    const [formInput, setFormInput] = useState(initialFormValues);

    useEffect(() => {
        setFormInput(initialFormValues);
    }, [tasks]);

    const handleFormChange = (event) => {

        let newData = { id: '', taskTitle: '', isDone: false }
        newData[event.target.name] = event.target.value;
        setFormInput(newData);

    };

    const submit = (e) => {
        e.preventDefault();
        if (formInput.taskTitle !== '') {
            formInput.id = tasks.length + 1;
            addTasks([...tasks, formInput]);
        }
        else {
            console.log('please enter a valid task');
        }
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
