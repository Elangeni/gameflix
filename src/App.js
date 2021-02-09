
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import { BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react'
import { node } from 'prop-types';

class App extends Component {

  constructor(props){
    super(props);
        this.state = {
            userStatus: {
              loggedIn: "false",
              user:null,
              avatar:null
            }
        };
  }
  
  render() {
    return (
      <Router>
      <Navbar status={this.state.userStatus}/>
      <MainSearch/>
    </Router>
    )
  }
}

export default App;
