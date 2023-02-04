import React from 'react';

function NotJsx(props) {
    return (
        React.createElement('h1', { className: 'btn' }, 'This is Called Pure Component')
    );
}

export default NotJsx;