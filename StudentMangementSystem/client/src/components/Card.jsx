import React, { Component } from 'react'
import './Card.css'


class Card extends Component {
    constructor(props) {
        console.log('Invoked Constructur');
        super(props);

        //! Provide Default Data 
        this.state = {
            img: '/asset/OIP.jpeg',
            name: 'Name',
            job: 'job'
        }

    }

    Male = () => {
        //! Chgange the state Value Baseed on User Click
        this.setState({
            img: 'https://www.w3schools.com/howto/img_avatar.png',
            name: 'Mr.Amit Kr Sarkar',
            job: 'EE'
        })
    }

    FeMale = () => {
        //! Chgange the state Value Baseed on User Click
        this.setState({
            img: 'https://www.w3schools.com/howto/img_avatar2.png',
            name: 'Ms.Amit Kr Sarkar',
            job: 'BSc'
        })
    }

    render() {
        return (
            <>
                <h2>Card</h2>

                <div className="card">
                    <img src={this.state.img} alt="Avatar" style={{ width: '50%' }} />
                    <div className="container">
                        <h4><b>{this.state.name}</b></h4>
                        <p>{this.state.job}</p>
                    </div>
                    <div className="container">
                        <button className='button' onClick={this.Male}>Male</button>
                        <button className='button' onClick={this.FeMale}>FeMale</button>
                    </div>
                </div>
            </>
        );
    }

}
export default Card