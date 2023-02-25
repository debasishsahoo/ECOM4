import React from 'react';
import { Link, Outlet } from 'react-router-dom'

function Exam(props) {
    return (
        <div>
            <h1>Exam:</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='jee'>JEE</Link>
                    </li>
                    <li>
                        <Link to='neet'>NEET</Link>
                    </li>
                </ul>
            </nav>
            <>
                <Outlet />
            </>

        </div>
    );
}

export default Exam;