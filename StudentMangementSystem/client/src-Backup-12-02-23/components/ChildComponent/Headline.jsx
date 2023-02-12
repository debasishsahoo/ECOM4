import React from 'react';

function Headline(props) {
    return (
        <React.Fragment>
            <h2 style={{ 'textAlign': 'center' }}>{props.title}</h2>
        </React.Fragment>
    );
}

export default Headline;