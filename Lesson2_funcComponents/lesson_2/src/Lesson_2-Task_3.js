import './App.css';
import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
      super(props)
      this.state = { title: "lesson2(Initialization and Mounting)" };
    }

    handleButtonClicker = () => {
        this.setState({ title: "lesson2(Updated)" })
    }

    componentDidUpdate() {
        document.title = this.state.title;
    }

    render () {
      return (
        <div className="App">
            <button onClick={this.handleButtonClicker}>Change Lifecycle</button>
        </div>
      )
    }
}


export default Lifecycle;