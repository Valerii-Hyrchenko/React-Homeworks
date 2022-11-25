import './App.css';
import React from 'react';

class Form extends React.Component {
    state = {
        name: "",
        surname: "",
        error: ""
    };

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
        const { name, surname } = this.state
        if (this.dataValidation(name, surname)) {
            alert(`Welcome - ${name} ${surname}!`);

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

const FormContent = ({ inputData, handleFormSubmit, handleChangeName, handleChangeSurname }) => {
    const { name, surname } = inputData;

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <input onChange={handleChangeName} value={name} type="text" placeholder="Name" name="name"/>
            </div>
            <div>
                <input onChange={handleChangeSurname} value={surname} type="text" placeholder="Surname" name="surname"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;