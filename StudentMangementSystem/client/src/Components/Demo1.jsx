import React from "react";

const Demo1 = () => {

    const x = 50;
    //Single Quoit=''
    //Double Quoit=""
    //Backtick=``  Upon TAB Button bottom of Esc Button

    const y = `
    #include<stdio.h>
    void main(){
        printf("Hello World")
        clscr();
    };
    `;

    return (
        <div>
            <h1>This is Simple JSX Element</h1>
            <h1>React is {'{5 + 5}'} times better with JSX</h1>
            <ul>
                <li>Apples</li>
                <li>Bananas</li>
                <li>Cherries</li>
            </ul>
            <div>
                <p>I am a paragraph.</p>
                <p>I am a paragraph too.</p>
            </div>
            <div>
                <code>
                    <pre>
                        {y}
                    </pre>
                </code>


            </div>
            <h1> {(x) < 10 ? "Amit" : "Suman"} </h1>
        </div>
    );

}

export default Demo1