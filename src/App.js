
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import Cards from './Components/SearchResults/App'
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
      <Cards/>
    </Router>
    )
  }
}

export default App;
