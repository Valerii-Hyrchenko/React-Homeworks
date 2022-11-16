import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: "Peter",
      surname: "Johnson",
      age: "30",
    };
  }

  render () {
    return (
      <div className="App">
        {/* <UserCard name={this.state.name} surname={this.state.surname} age={this.state.age}/> */}
        <UserCard userData={this.state}/>
        <UserCardText userData={this.state} isDrink={this.state.age > 18 ? "can" : "can't"}/>
      </div>
    )
  }
}

const UserCard = (props) => {

  // const { name, surname, age } = props;
  const { name, surname, age } = props.userData;

  return (
    <div>
      <div>User information:</div>
      <div>Name: {name}</div>
      <div>Surname: {surname}</div>
      <div>Age: {age}</div>
    </div>
  )
}

const UserCardText = (props) => {
  const { name, surname, age} = props.userData;
  return (
    <div>
      <div>My info: {name} - {surname} - {age}</div>
      <div>Bar:
        Hi, {name}! You're {age} age old! I {props.isDrink} get you a drink.
      </div>
    </div>
  )
}

export default App;