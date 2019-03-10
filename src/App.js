import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
    }

    this.switchNameHandler = this.switchNameHandler.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.togglePersonHandler = this.togglePersonHandler.bind(this)
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {this.state.showPersons ? <div><Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            onClick={()=> this.switchNameHandler('Maximilian')}
            changed={this.nameChangeHandler}
            >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null}
      </div>
    );
  }
}

export default App;
