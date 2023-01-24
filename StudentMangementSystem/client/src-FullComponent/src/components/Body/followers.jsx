import React from 'react'

const followers = () => {
    const follows=[
        {
            classname:'fi-social-facebook',
            numbers:'56,009',

        },
        {
            classname:'fi-social-twitter',
            numbers:'76,905',

        },
        {
            classname:'fi-social-instagram',
            numbers:'34,099',

        },
        {
            classname:'fi-social-tumblr',
            numbers:'13,765',

        },
        {
            classname:'fi-social-pinterest',
            numbers:'9,283',

        },
        {
            classname:'fi-social-youtube',
            numbers:'99,000',

        }
    ]
  return (
    <>
    {
        follows.map((item,index)=>{
            return(
                <div className="column text-center" key={index}>
                <i className={item.classname}></i>
                <h6>{item.numbers}</h6>
                <p>
                  <small>FOLLOWERS</small>
                </p>
                <br></br>
            </div>
            );
        })
    }
    </>
  )
}

export default followers
