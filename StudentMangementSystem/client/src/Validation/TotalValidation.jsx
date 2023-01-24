import React from 'react';

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
                    </tbody>
                </table>
            </div >
        );
    }
}

export default TotalValidation;