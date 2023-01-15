import React from 'react';

// function PropsSpread({ a, b, c, d, e, f, g }) {
    //Array Destructing
function PropsSpread({ ...x }) {
    return (
        <>
            {x.a}
            <br />
            {x.b}
            <br />
            {x.c}
            <br />
            {x.d}
            <br />
            {x.e}
            <br />
            {x.f}
            <br />
            {x.g}
        </>
    );
}

export default PropsSpread;