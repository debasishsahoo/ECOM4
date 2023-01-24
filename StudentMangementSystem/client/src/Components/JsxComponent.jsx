import React from 'react'

export default function JsxComponent() {
    let x = 5;
    return (
        <div>
            <h1>This is Simple Jsx Component</h1>
            <h3>React is {1 + 2 + 3 + 4} times Better with Jsx</h3>
            <h1>{x > 10 ? "Hello JSX" : "Bye JSX"}</h1>
        </div>
    )
}
