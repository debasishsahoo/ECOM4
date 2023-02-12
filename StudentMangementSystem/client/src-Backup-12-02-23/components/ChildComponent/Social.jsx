import React from 'react';

function Social(props) {
    const iconClass = ['dribbble', 'twitter', 'linkedin', 'facebook']
    return (
        <React.Fragment>
            {
                iconClass.map((icon, index) => {
                    return (<a href="#" key={index}><i className={`fa fa-${icon}`}></i></a>)
                })

            }
        </React.Fragment>
    );
}

export default Social;