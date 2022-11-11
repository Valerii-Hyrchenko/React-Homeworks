import './App.css';
import React from 'react';
class Header extends React.Component {

  state = {currentPage: "Home"};

  CreateLi = (props) => {
    return (
      <li onClick={this.CheckCurrentPage}>{props.menuItem}</li>
    )
  }

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
    return (
      <header className="container">
        <nav>
          <ul className="header-ul-flex">
            <this.CreateLi menuItem="Home"/>
            <this.CreateLi menuItem="News"/>
            <this.CreateLi menuItem="CallBack"/>
            <this.CreateLi menuItem="Contacts"/>
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
      <p>CallBack  page</p>
    )
  }
}

class Contacts  extends React.Component {
  render() {
    return (
      <p>Contacts  page</p>
    )
  }
}

export default Header;
