import './App.css';
import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        name: "",
        surname: "",
        error: ""
      };
    }

    dataValidation = (...data) => {
        if (data.every((data) => (data && data.length >= 3))) {
            return true
        } else {
            return false
        }
    }

    handleChangeName = (event) => {
        this.setState({name: event.target.value.trim()});
    }

    handleChangeSurname = (event) => {
        this.setState({surname: event.target.value.trim()});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        if (this.dataValidation(this.state.name, this.state.surname)) {
            alert(`Welcome - ${this.state.name} ${this.state.surname}!`);

            this.setState({
                name: "",
                surname: "",
                error: ""
            });
        } else {
            this.setState({error: "Something is wrong with your data :("});
        }
        
    }

    render () {
      return (
        <div className="App">
          <FormContent inputData={this.state} handleChangeName={this.handleChangeName}
          handleChangeSurname={this.handleChangeSurname} handleFormSubmit={this.handleFormSubmit}/>
        </div>
      )
    }
}

const FormContent = (props) => {
    const { name, surname } = props.inputData;

    return (
        <form onSubmit={props.handleFormSubmit}>
            <div>
                <input onChange={props.handleChangeName} value={name} type="text" placeholder="Name" name="name"/>
            </div>
            <div>
                <input onChange={props.handleChangeSurname} value={surname} type="text" placeholder="Surname" name="surname"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;