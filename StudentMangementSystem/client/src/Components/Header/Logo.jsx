import React from 'react';

function Logo(props) {
    const logoObj = [
        {
            size: 4,
            height: 450,
            width: 183,
            text: 'LOGO',
            altText: "company logo"
        },
        {
            size: 8,
            height: 900,
            width: 175,
            text: 'Responsive Ads - ZURB Playground/333',
            altText: "advertisement for deep fried Twinkies"
        }
    ]
    return (
        <div className="row">
            {logoObj.map((item, index) => {
                return (
                    <div className={`medium-${item.size} columns`} key={index}>
                        <img src={`https://via.placeholder.com/${item.height}x${item.width}&text=${item.text}`} alt={`${item.altText}`} />
                    </div>
                )
            })}
        </div >
    );
}

export default Logo;