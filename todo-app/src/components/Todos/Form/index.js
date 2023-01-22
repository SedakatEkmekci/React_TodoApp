import { useState, useEffect } from 'react';

const initialFormValues = { name: '' };

function Form({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const onSubmit = (e) => {
        // console.log(form);
        e.preventDefault();
        if (form.name === '') {
            return false;
        }
        addTodos([...todos, form]);
    }
    return (

        <form onSubmit={onSubmit}>

            <input className='new-todo'
                placeholder='What needs to be done?'
                name='todos'
                value={form.todos}
                onChange={onChangeInput} />

        </form>
    )
};

export default Form
