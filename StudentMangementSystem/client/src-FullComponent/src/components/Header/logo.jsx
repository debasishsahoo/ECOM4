import React from "react";

const logo = (props) => {
    const data=[
        {
            "size":4,
            "height":450,
            "width":183,
            "text":"LOGO",
            "alttext":"company logo"
        },
        {
            "size":8,
            "height":900,
            "width":175,
            "text":"Responsive Ads - ZURB Playground/333",
            "alttext":"advertisement for deep fried Twinkies"
        }
    ]
  return (
    <div className="row">


        {
            data.map((item,index)=>{
                // console.log(item)
                // console.log(item[index])
                return (
                    <div className={`medium-${item.size} columns`} key={index}>
                    <img
                      src={`https://via.placeholder.com/${item.height}x${item.width}&text=${item.text}`}
                      alt={item.alttext}
                    ></img>
                  </div>  
                );
            })
        }
     
    </div>
  );
};

export default logo;
