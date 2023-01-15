import React from 'react';

function PropsPass(props) {
    return (
        <div>
            <p>{props.students[0]}</p>
            <br />

            <ul>
                {props.students.map((student, index) => {
                    return (
                        <li key={index}>
                            Key:{index},Value:{student}
                        </li>
                    );
                })}
            </ul>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map((student, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{student}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <br />

            <table border={1}>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map((student, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{student}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PropsPass;
