import { useState, useEffect } from 'react';

const initialFormValues = { taskTitle: '' };

function Form({ addtasks, tasks }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.taskTitle]: e.target.value });
    };


    const onSubmit = (e) => {
        // console.log(form);
        e.preventDefault();
        if (form.taskTitle === '' && form.taskId === '') {
            return false;
        }
        addtasks([...tasks, form]);
    }
    return (

        <form onSubmit={onSubmit}>

            <input classtaskTitle='new-todo'
                placeholder='What needs to be done?'
                taskTitle='tasks'
                value={form.tasks}
                onChange={onChangeInput} />

        </form>
    )
};

export default Form;
