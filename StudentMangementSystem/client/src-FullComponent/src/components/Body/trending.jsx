import React from "react";

const trending = () => {
    const trends=[
        {
            className:'thumbnail',
            img:{
                hight:'100'
            },
            alt:'Image1',
            text:"All I need is a space suit and I'm ready to go."
        },
        {
            className:'thumbnail',
            img:{
                hight:'100'
            },
            alt:'Image2',
            text:"Are the stars out tonight? I don't know if it's cloudy or bright."
        },
        {
            className:'thumbnail',
            img:{
                hight:'100'
            },
            alt:'Image3',
            text:"And the world keeps spinning."
        },
        {
            className:'thumbnail',
            img:{
                hight:'100'
            },
            alt:'Image4',
            text:"Cold hearted orb that rules the night."
        }
    ]
  return (
    <>

    {
        trends.map((item,index)=>{
            return (
                <div className="media-object" key={index}>
                <div className="media-object-section">
                  <img
                    className={item.className}
                    src={`https://via.placeholder.com/${item.img.hight}`} alt={item.alt}
                  ></img>
                </div>
                <div className="media-object-section">
                  <h5>{item.text}</h5>
                </div>
              </div>
            );
        })
    }
     

    
    </>
  );
};

export default trending;
