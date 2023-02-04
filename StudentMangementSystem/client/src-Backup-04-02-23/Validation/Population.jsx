import React from 'react';
import './main.css'

const PercentageCal = ({ lable, total, score }) => {
    return (
        <div className='pricetab'>
            <h1>{lable}</h1>
            <div className='price'>
                <h2>{Math.round(score / total * 100)}%</h2>
            </div>
        </div>
    )
}




function Population(props) {
    return (
        <>
            <h1>Male Population</h1>
            <div>
                <PercentageCal lable='Class 1' total={360} score={203} />
                //!Messing of Value in any of the Property
                <PercentageCal lable='Class 2' total={260} />
                <PercentageCal lable='Class 3' score={107} />
                <PercentageCal lable='Class 4' />
            </div>

            <div>
                 //! Value Zero
                <PercentageCal lable='Class 1' total={0} score={203} />
                <PercentageCal lable='Class 2' total={0} />
                <PercentageCal lable='Class 3' score={f => f} />
                <PercentageCal lable='Class 4' total={{}} score="0" />
            </div>

        </>
    );
}

export default Population;