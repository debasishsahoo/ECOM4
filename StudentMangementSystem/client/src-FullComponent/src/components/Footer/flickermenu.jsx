import React from 'react'

const flickermenu = () => {
    const menus=['Space','Galaxies','Milky Way','Black Holes','Rebels','Death Star','Republic','R2D2']
  return (
    <div className="large-4 columns">
    <h5>FLICKR IMAGES</h5>
    {
        menus.map((menu,index)=>{
            return (
                <span className="secondary label" key={index}>{menu}</span>
            );
        })
    }
  
   
  </div>
  )
}

export default flickermenu
