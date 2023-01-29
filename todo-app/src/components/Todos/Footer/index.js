import { useState } from 'react';

function Footer({ tasks }) {





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
                    <a >Completed</a>
                </li>
            </ul>

            <button className="clear-completed" >
                Clear completed
            </button>
        </footer>

    )

}

export default Footer;
