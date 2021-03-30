import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import { BrowserRouter as Router } from 'react-router-dom'
import React, { useState} from 'react'


const App = () => {
const [userStatus] = useState(
  {
    loggedIn: "false",
    user:null,
    avatar:null
  }

);

  return (
    <Router>
       <Navbar status={userStatus}/>
       <MainSearch/>
     </Router>
  )
}

export default App
