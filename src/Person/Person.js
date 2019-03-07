import React from 'react'

const person = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChange} value={props.name} />
      <p>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person