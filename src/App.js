
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import SearchResult from './Components/SearchResults'
import { BrowserRouter as Router } from 'react-router-dom'
import React, { Component } from 'react'

// function App() {
//   return (
    
//   );
// }
class App extends Component {
  
  render() {
    return (
      <Router>
      <Navbar/>
      <MainSearch/>
      {/* <SearchResult games ={this.state.game}/> */}
    </Router>
    )
  }
}

export default App;
