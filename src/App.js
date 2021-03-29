
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import { BrowserRouter as Router } from 'react-router-dom'
import React, { Component, useState} from 'react'
import { node } from 'prop-types';
import firebase from "firebase";

// class App extends Component {
  
//   constructor(props){
//     super(props);
//         this.state = {
//             userStatus: {
//               loggedIn: "false",
//               user:null,
//               avatar:null
//             }
//         };
//   }
  
//   render() {
//     return (
//       <Router>
//       <Navbar status={this.state.userStatus}/>
//       <MainSearch/>
//     </Router>
//     )
//   }
// }

const App = () => {
const [userStatus, setStatus] = useState(
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
