import React from "react";

const ValueProps = (props) => {
    return (
        <div>
            <h3>String Literals:</h3>
            <div>
                {props.strData}
            </div>
            <h3>Template Literals with value also:</h3>
            <div>
                {props.templateData}
            </div>
            <h3>Number Literals:</h3>
            <div>
                {props.numData}
            </div>
            <h3>Boolean Literals:</h3>
            <div>
                {props.boolData}
            </div>
            <h3>Plain Object Literals:</h3>
            <div>
                {props.objData.name}
            </div>
            <h3>Array Literals:</h3>
            <div>
                {props.numData}
            </div>
            <h3>Jsx Literals:</h3>
            <div>
                {props.jsxData}
            </div>
            <h3>Variable having any king of Value:</h3>
            <div>
                {props.anyData}
            </div>
        </div>
    );

}

export default ValueProps