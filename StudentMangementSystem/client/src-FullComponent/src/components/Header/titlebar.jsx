import React from "react";


const Titlebar = (props) => {

  const titlemenus = [
    {
      item: "Tech",
      submenus: ["One", "Two", "Three"],
    },
    {
      item: "Energy",
      submenus: ["One", "Two", "Three"],
    },
    {
      item: "Space",
      submenus: ["One", "Two", "Three"],
    },
    {
      item: "Medicine",
      submenus: ["One", "Two", "Three"],
    },
    {
      item: "Robotics",
      submenus: ["One", "Two", "Three"],
    },
    {
      item: "Tesla",
      submenus: ["One", "Two", "Three"],
    },
  ];

  return (
    <>
      <div
        className="title-bar"
        data-responsive-toggle="main-menu"
        data-hide-for="medium"
      >
        <button className="menu-icon" type="button" data-toggle></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="main-menu">
        <ul
          className="menu vertical medium-horizontal expanded medium-text-center"
          data-responsive-menu="drilldown medium-dropdown"
        >
          {titlemenus.map((menus, index) => {
            return (
              <li className="has-submenu" key={index}>
                <a href="#">{menus.item}</a>
                <ul className="submenu menu vertical" data-submenu>
                  {menus.submenus.map((submenu, index) => {
                    return (
                      <li key={index}>
                        <a href="#">{submenu}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
          <li className="has-submenu">
            <a href="#">Tech</a>
            <ul className="submenu menu vertical" data-submenu>
              <li>
                <a href="#">One</a>
              </li>
              <li>
                <a href="#">Two</a>
              </li>
              <li>
                <a href="#">Three</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Titlebar;
