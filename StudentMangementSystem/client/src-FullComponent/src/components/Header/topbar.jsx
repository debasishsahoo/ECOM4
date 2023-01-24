import React from "react";

const topbar = (props) => {
    const menus=['Menu1','Menu2','Menu3','Menu4']
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
        {
         menus.map((menu,index)=>{
          return (
            <li key={index}><a href="#">{menu}</a></li>
          );
         })
        } 
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <input type="search" placeholder="Search"></input>
          </li>
          <li>
            <button type="button" className="button">
              Search
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default topbar;
