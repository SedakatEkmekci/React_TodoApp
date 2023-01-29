import { useState } from 'react';

function Footer({ tasks }) {







    return (
        <section className="footer">

            <ul className="filters">
                <li>
                    <span onClick={selectAll} className="selected">All</span>
                </li>
                <li>
                    <a>Active</a>
                </li>
                <li>
                    <a >Completed</a>
                </li>

            </ul>
            <button className="clear-completed" >
                Clear completed
            </button>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://github.com/SedakatEkmekci">Sedakat Ekmekçi</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </section>


    )

}

export default Footer;
