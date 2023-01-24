import React from 'react'

const footerrow = () => {
    const menu=['Legal','Partner','Explore']
  return (
    <div className="row expanded">
    <div className="medium-6 columns">
      <ul className="menu">
        {
            menu.map((item,index)=>{
                return(
                    <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                );
            })
        }
       
      
      </ul>
    </div>

    <div className="medium-6 columns">
      <ul className="menu align-right">
        <li className="menu-text">Copyright © 2099 Random Mag</li>
      </ul>
    </div>
  </div>
  )
}

export default footerrow
