import { useState, useEffect } from 'react';

const initialFormValues = { todo: '' };

function Form({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues);

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.todo === '') {
            return false;
        }
        addTodos([...todos, form]);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input className='new-todo'
                    placeholder='What needs to be done?'
                    name='todos'
                    value={form.todos}
                    onChange={onChangeInput} />
            </form>
        </div>
    )
};

export default Form
