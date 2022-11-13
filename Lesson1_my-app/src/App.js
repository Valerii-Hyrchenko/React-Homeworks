import './App.css';
import React from 'react';
import Home from "./components/Home"
import News from "./components/News"
import CallBack from "./components/CallBack"
import Contacts from "./components/Contacts"

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

const CreateLi = ({data, onClick}) => (
  <li onClick={onClick}>{data}</li>
);
class Header extends React.Component {

  state = {currentPage: "Home"};

  checkCurrentPage = (event) => {
    this.setState({currentPage: event.target.textContent});
  }
                                    
  renderCurrentPage = () => {
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
            {navDataConfig.map(({id, data}) => <CreateLi onClick={this.checkCurrentPage} data={data} key={id}/>)}
          </ul>
        </nav>
        <div>
          {this.renderCurrentPage()}
        </div>
      </header>
    )
  }
}

export default Header;