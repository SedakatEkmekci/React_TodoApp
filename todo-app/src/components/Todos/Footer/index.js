import { useState } from 'react';

function Footer(props) {
    const [inputs, setInputs] = useState();
    console.log(inputs);

    const deleteAll = (e,) => {
        console.log("orginal array:" + inputs);
    }




    return (
        <footer className="footer">
            <span className="todo-count">

                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" className="selected">All</a>
                </li>
                <li>
                    <a href="#/">Active</a>
                </li>
                <li>
                    <a onClick={deleteAll}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed">
                Clear completed
            </button>
        </footer>

    )

}

export default Footer;
