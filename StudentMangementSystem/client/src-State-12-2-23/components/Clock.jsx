import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }

        setInterval(() => this.setTime(), 1000);
    }

    setTime() {
        console.log(this.state.date)
        this.setState((state, props) => ({ date: new Date() }))
    }
    render() {
        return (
            <div className='clock'>{this.state.date.toString()}</div>
        )
    }
}


