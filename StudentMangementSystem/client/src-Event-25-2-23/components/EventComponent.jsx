import React, { Component } from 'react'
import './Event.css'

export default class EventComponent extends Component {

    state = {
        id: 1,
        name: "Debasish Sahoo"
    }

    clickHandler1() {
        console.log('Button Clicked')
    }
    clickHandler2() {
        console.log('Div Clicked')
    }

    eventHendlar(e) {
        e.preventDefault()
        console.log(e)
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('Link Clicked')

    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler1} className='button button1'>Button</button>

                <br />

                <div onClick={this.clickHandler2} className='button button2'>Div</div>

                <br />

                <a href='http://google.com' onClick={this.eventHendlar} name='Mylink' value='My Value'>Click</a>
            </div>
        )
    }
}
