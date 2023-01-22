import React from 'react';

function Menu(props) {
    const menuArray = [
        {
            "main": "Tech",
            "sub": ["manu1", "manu2", "manu3"]
        },
        {
            "main": "Energy",
            "sub": ["manu1", "manu2", "manu3", "manu4", "manu5"]
        },
        {
            "main": "Space",
            "sub": ["manu1", "manu2"]
        },
        {
            "main": "Medicine",
            "sub": ["manu1", "manu2", "manu3", "manu4"]
        },
        {
            "main": "Robotics",
            "sub": ["manu1"]
        },
        {
            "main": "Tesla",
            "sub": ["manu1", "manu2", "manu3", "manu4", "manu5"]
        }
    ]

    return (
        <>
            <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
                <button className="menu-icon" type="button" data-toggle></button>
                <div className="title-bar-title">Menu</div>
            </div>

            <div className="top-bar" id="main-menu">

                <ul className="menu vertical medium-horizontal expanded medium-text-center"
                    data-responsive-menu="drilldown medium-dropdown">


                    {
                        menuArray.map((items, index) => {
                            return (
                                <li className="has-submenu" key={index}><a href="#">{items.main}</a>
                                    <ul className="submenu menu vertical" data-submenu>
                                        {items.sub.map((item, index) => {
                                            return (
                                                <li key={index}><a href="#">{item}</a></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </>
    );
}

export default Menu;