import React from 'react';
//When you have some issue where the data is may not be coming from source the use optional props
function OptionalProps({ name = 'No Name is There' }) {
    return (
        <>
            {name}
        </>
    );
}

export default OptionalProps;