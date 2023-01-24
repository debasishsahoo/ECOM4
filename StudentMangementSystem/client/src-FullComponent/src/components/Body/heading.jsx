import React from 'react'

const heading = (props) => {
  return (
    <div className="row column">
        <h4 className="text-center"  style={{margin: 0}}>
          {props.text}
        </h4>
      </div>
  )
}

export default heading
