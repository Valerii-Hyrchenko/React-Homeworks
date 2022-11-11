import './App.css';
import React from 'react';
class Header extends React.Component {

  state = {currentPage: "Home"};

  CheckCurrentPage = (event) => {
    this.setState({currentPage: event.target.textContent});
  }
                                    
  RenderCurrentPage = () => {
    switch (this.state.currentPage) {
      case "Home":
        return (<Home/>);

      case "News":
        return (<News/>);

      case "CallBack":
        return (<CallBack/>);

      case "Contacts":
        return (<Contacts/>)
      
      default:
        return (<Home/>);
    }
  }

  render() {
    const navDataConfig = [
      {
        id: 1,
        data: "Home",
      },
      {
        id: 2,
        data: "News",
      },
      {
        id: 3,
        data: "CallBack",
      },
      {
        id: 4,
        data: "Contacts",
      },
    ];

    return (
      <header className="container">
        <nav>
          <ul className="header-ul-flex">
            {navDataConfig.map(({id, data}) => <li key={id} onClick={this.CheckCurrentPage}>{data}</li>)}
          </ul>
        </nav>
        <div>
          <this.RenderCurrentPage/>
        </div>
      </header>
    )
  }
}
class Home extends React.Component {
  render() {
    return (
      <p>Home page</p>
    )
  }
}

class News extends React.Component {
  render() {
    return (
      <p>News page</p>
    )
  }
}

class CallBack  extends React.Component {
  render() {
    return (
      <p>CallBack page</p>
    )
  }
}

class Contacts  extends React.Component {
  render() {
    return (
      <p>Contacts page</p>
    )
  }
}

export default Header;