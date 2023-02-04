import React from 'react';
import PropTypes from 'prop-types'

//!nodeProp,elementProps,enumProps,unionProps,peopleArrayProps[0],

class TotalValidation extends React.Component {
    render() {
        return (
            <div>
                <h1>React JS props Validation</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Valid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Node</th>
                            <th>{this.props.nodeProp}</th>
                            <th>{this.props.nodeProp ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>ElementProps</th>
                            <th>{this.props.elementProp}</th>
                            <th>{this.props.elementProp ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>EnumProps</th>
                            <th>{this.props.enumProp}</th>
                            <th>{this.props.enumProp ? 'true' : 'false'}</th>
                        </tr>
                        <tr>
                            <th>UnionProp</th>
                            <th>{this.props.unionProp}</th>
                            <th>{this.props.unionProp ? 'true' : 'false'}</th>
                        </tr>
                    </tbody>
                </table>
            </div >
        );
    }
}

class Person {
    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const isEmail = (props, propName, componentName) => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!regex.test(props[propName])) {
        return new Error(
            `Invalid prop ${propName} passed to ${componentName}. Expected a valid email.`
        );
    }

}

TotalValidation.propType = {
    nodeProp: PropTypes.node,
    elementProp: PropTypes.element,
    enumProp: PropTypes.oneOf([true, false, 0, 'Unknown']),

    unionProp: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Person)
    ]),
    peopleArrayProp: PropTypes.arrayOf(
        PropTypes.instanceOf(Person)
    ),
    multipleArrayProp: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    ),

    booleanObjectProp: PropTypes.objectOf(
        PropTypes.bool
    ),

    multipleObjectProp: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.number,
            PropTypes.string,
            PropTypes.instanceOf(Person)
        ])
    ),
    profileProp: PropTypes.shape({
        id: PropTypes.number,
        fullname: PropTypes.string,
        gender: PropTypes.oneOf(['M', 'F']),
        birthdate: PropTypes.instanceOf(Date),
        isAuthor: PropTypes.bool
    }),
    subjectScoreProp: PropTypes.exact({
        subject: PropTypes.oneOf(['Maths', 'Phys', 'Chem']),
        score: PropTypes.number
    }),
    email: isEmail



}

TotalValidation.defaultProps = {
    nodeProp: "<h1>Debasish</h1>",
    elementProp: React.createElement('h1', { class: "head-tag" }, "Debasish"),
    enumProp: 5,
    unionProp: new Person("Debasish", "CSE"),
    peopleArrayProp: [new Person("Debasish", "CSE"), new Person("Azim", "CSE")],
    multipleArrayProp: [5, 8, 9],
    booleanObjectProp: { isOdd: true },
    multipleObjectProp: { name: 'Debasish', age: 34 },
    profileProp: {
        id: 126,
        fullname: 'Debasish Sahoo',
        gender: 'A',
        birthdate: new Date(1987, 6, 23),
        isAuthor: true,
    },
    subjectScoreProp: {
        subject: 'Maths',
        score: 95

    },
    email: 'debasish.sahoo96gmail.com'

}







export default TotalValidation;