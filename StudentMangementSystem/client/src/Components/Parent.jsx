import React from 'react';

function Parent({ Children }) {
    console.log(Children)
    return (
        <div>
            {Children}
        </div>
    );
}

export default Parent;