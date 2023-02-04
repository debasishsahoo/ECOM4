import React from 'react';

function Image(props) {

    return (
        <React.Fragment>
            <img src={props.img} alt="John" style={{ 'width': '100%' }} />
        </React.Fragment>
    );
}

export default Image;