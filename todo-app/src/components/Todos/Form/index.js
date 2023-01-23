import { useState, useEffect } from 'react';



function Form() {
    const [formInput, setFormInput] =
        useState([{ taskTitle: '', }
        ])

    const handleFormChange = (index, event) => {

        let newData = [...formInput];
        newData[index][event.target.name] = event.target.value;
        setFormInput(newData);

    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formInput)
    }



    return (
        <div>
            <form onSubmit={submit}>
                {formInput.map((input, index) => {
                    return (
                        <div key={index} className='new-todo'>
                            <input
                                placeholder='What needs to be done?'
                                name='taskTitle'
                                value={input.task}
                                onChange={e => handleFormChange(index, e)}
                                autoFocus />
                            <br />
                            <button onClick={submit}>Submit</button>


                        </div>
                    )
                })}

            </form>
        </div>
    )
};

export default Form;
