import React from 'react';
import logo from './logo.svg';
import './Components/Assets/css/plugins.css';
import './Components/Assets/css/style.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Schedule from './Components/Schedule';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' ><Home /></Route>
          <Route exact path='/about' ><About/></Route>
          <Route exact path='/contact' ><Contact /></Route>
          <Route exact path='/schedule' ><Schedule /></Route>
          {/*  */}
          {/*  */}

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
