import React from 'react';
import './nav.css'
import { Outlet, Link, NavLink } from "react-router-dom"

function Layout(props) {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/gallery'>Gallery</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/exam'>Exam</NavLink></li>
                </ul>
            </nav>
            <>
                <Outlet />
            </>

        </>
    );
}

export default Layout;