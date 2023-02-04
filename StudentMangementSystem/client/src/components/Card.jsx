import React from 'react'
import './Card.css'
import Image from './ChildComponent/Image'
import Info from './ChildComponent/Info'
import Headline from './ChildComponent/Headline'
import Social from './ChildComponent/Social'

export default function Card() {
    const divStyle = {
        margin: '24px 0'
    }

    const Data = {
        title: 'Devloper Profile Card',
        img: 'https://www.w3schools.com/w3images/team2.jpg',
        name: 'Debasish Sahoo',
        job: 'CEO & CTO & Founder',
        clg: 'GMIT'
    }

    return (
        <div>
            <Headline title={Data.title} />

            <div className="card">

                <Image img={Data.img} />

                <Info name={Data.name} job={Data.job} clg={Data.clg} />

                <div style={divStyle}>

                    <Social />
                </div>

                <p><button>Contact</button></p>
            </div>

        </div >
    )
}
