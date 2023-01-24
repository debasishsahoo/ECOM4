import React from 'react'

const fickerimage = (props) => {
    const fickeritems=[
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        },
        {
            size:'75',
            alt:'image of space dog'
        }

    ]
  return (
    <div className="large-4 columns">
        <h5>FLICKR IMAGES</h5>
        <div className="row small-up-4">
            {
                fickeritems.map((item,index)=>{
                    return( 
                         <div className="column" key={index}><img className="thumbnail" src={`https://via.placeholder.com/${item.size}`} alt={item.alt}></img>
                    </div>
                    );
                  
                })
            }
         
         
        </div>

      </div>
  )
}

export default fickerimage
