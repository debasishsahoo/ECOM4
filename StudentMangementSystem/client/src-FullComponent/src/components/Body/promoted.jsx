import React from 'react'

const promoted = () => {
    const promoteddatas=[
        {
            columnSize:'8',
            image:[{
                hight:'900',
                width:'450',
                text:'Promoted Article',
                alt:'main article image'
            }]
        },
        {
            columnSize:'4',
            image:[
                {
                hight:'400',
                width:'200',
                text:'Other cool article',
                alt:'article promo image1'
              },
                {
                hight:'400',
                width:'200',
                text:'Other cool article',
                alt:'article promo image2'
              }
        ]
        }
    ]
  return (
    <div className="row">
        {
            promoteddatas.map((data,index)=>{
                return(
                    <div className={`medium-${data.columnSize} columns`} key={index}>
                        {
                            data.image.map((img,index)=>{
                                return(
                                    <p key={index}>
                                    <img
                                      src={`https://via.placeholder.com/${img.hight}x${img.width}&text=${img.text}`}
                                      alt={img.alt}
                                    ></img>
                                  </p>  
                                );
                            })
                        }
                   
                  </div>
                )
            })
        }
  </div>
  )
}

export default promoted
