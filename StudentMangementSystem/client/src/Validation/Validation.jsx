import React from 'react';
import propTypes from 'prop-types';
import './main.css'

const PercentageCal = ({ lable, score = 0, total = Math.max(1, score) }) => {
    return (
        <div className='pricetab'>
            <h1>{lable}</h1>
            <div className='price'>
                <h2>{Math.round(score / total * 100)}%</h2>
            </div>
        </div>
    )
}



const isNumaric = (value) => {
    const regex = /^(\+|-)?((\d*\.?\d+)|(\d+\.?\d*))$/;
    return (
        Number.isFinite(value) || (typeof value === 'string' && regex.test(value))
    )
}

const isNonZero = (value) => {
    return +value !== 0;
}

function ValidatedType(...validators) {
    return function (props, propName, componentName) {


        const value = props[propName];

        console.log('props:', props)
        console.log('propName:', propName)
        console.log('value:', props[propName])
        console.log('componentName:', componentName)

        const valid = validators.every((validator) => {

            if (typeof validator === 'function') {
                
                const result = validator(value);

                return typeof result === 'boolean' && result;
            }
            return false;
        })

        if (!valid) {
            return new Error(
                `Invalid prop ${propName} passes to ${componentName}. Validation Failed`
            );
        }
    }

}


PercentageCal.propTypes = {
    lable: propTypes.string.isRequired,
    score: ValidatedType(isNumaric),
    total: ValidatedType(isNumaric, isNonZero)
}



function Validation(props) {
    return (
        <>
            <h1>Male Population</h1>
            <div>
                {/* <PercentageCal lable='Class 1' total={360} score={203} /> */}
                <PercentageCal lable='Class 2' total={260} />
                {/* <PercentageCal lable='Class 3' score={107} />
                <PercentageCal lable='Class 4' /> */}
            </div>

            <div>
                {/* <PercentageCal lable='Class 1' total={0} score={203} />
                <PercentageCal lable='Class 2' total={0} />
                <PercentageCal lable='Class 3' score={f => f} />
                <PercentageCal lable='Class 4' total={{}} score="0" /> */}
            </div>

        </>
    );
}

export default Validation;