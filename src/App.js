import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Edwin",
      age: "27"
    }

    this.inputNameHandler = this.inputNameHandler.bind(this)
  }

  inputNameHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name={this.state.name} age={this.state.age} onChange={this.inputNameHandler} />
      </div>
    );
  }
}

export default App;
