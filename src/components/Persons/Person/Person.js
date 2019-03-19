import React, { Component, Fragment } from 'react'

import classes from './Person.module.css'

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...')
    return <Fragment>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
      <p>{this.children}</p>
      <input type="text" onChange={this.props.changed} />
    </Fragment>
  }
}

export default Person