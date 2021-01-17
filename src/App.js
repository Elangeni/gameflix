
import './App.css';
import Navbar from './Components/Navbar';
import MainSearch from './Components/MainSearch';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <MainSearch/>
    </Router>
  );
}

export default App;
