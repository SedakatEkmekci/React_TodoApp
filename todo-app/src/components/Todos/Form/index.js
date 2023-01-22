import { useState, useEffect } from 'react';

const initialFormValues = { todo: '', indexNo: '0' };

function Form({ addTodos, todos }) {
    const [form, setForm] = useState(initialFormValues);
    return (
        <div>
            <form>
                <input class="new-todo" placeholder="What needs to be done?" autoFocus />
            </form>
        </div>
    )
}

export default Form
