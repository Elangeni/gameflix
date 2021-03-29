
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import { BrowserRouter as Router } from 'react-router-dom'
import React, { useState} from 'react'
import firebase from "firebase";


const App = () => {
const [userStatus] = useState(
  {
    loggedIn: "false",
    user:null,
    avatar:null
  }

);

const firebaseApp = firebase.apps[0];
  return (
    <div>
      <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>

    <Router>
       <Navbar status={userStatus}/>
       <MainSearch/>
     </Router>
    </div>
  )
}

export default App
