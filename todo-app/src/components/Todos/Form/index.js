import { useState, useEffect } from 'react';

const initialFormValues = { taskTitle: '' };

function Form({ addTasks, tasks }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        // console.log(form);
        e.preventDefault();
        if (form.taskTitle === '') {
            return false;
        }
        addTasks([...tasks, form]);
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input className='new-todo'
                    name='taskTitle'
                    placeholder='What needs to be done?'
                    value={form.taskTitle}
                    onChange={onChangeInput} />

            </div>

        </form>
    )
};

export default Form;
