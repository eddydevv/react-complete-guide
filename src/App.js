import React, { Component } from 'react'
import styles from './App.module.css'
import Person from './Person/Person'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: [
        { id: 'asdasd', name: 'Max', age: 28 },
        { id: 'asdafe', name: 'Manu', age: 29 },
        { id: 'cdsfsd', name: 'Stephanie', age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
    }

    this.deletePersonHandler = this.deletePersonHandler.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.togglePersonHandler = this.togglePersonHandler.bind(this)
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {

    let persons = null
    let btnClass = ''

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      )
      btnClass = styles.Red
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push( styles.red )
    }
    if (this.state.persons.length <= 1) {
      classes.push( styles.bold )
    }

    return (
        <div className={styles.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
