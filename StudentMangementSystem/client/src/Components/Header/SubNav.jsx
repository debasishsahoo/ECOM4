import React from 'react';

function SubNav(props) {
    const menuArray = ['Home', 'About', 'Blog', 'Contact']
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    {menuArray.map((item, index) => {
                        return (
                            <li key={index}><a href="#">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search" /></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    );
}

export default SubNav;