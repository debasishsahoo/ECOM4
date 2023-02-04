import React from 'react';

function Info(props) {
    return (
        <React.Fragment>
            <h1>{props.name}</h1>
            <p className="title">{props.job}</p>
            <p>{props.clg}</p>
        </React.Fragment>
    );
}

export default Info;