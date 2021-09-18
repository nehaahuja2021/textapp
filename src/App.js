/*import logo from './logo.svg';*/

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style = 'background: #232321;';
    }
    else {
      setMode('light');
      document.body.style = 'background: white;';
    }
  }

  return (

    <Router>
      <Navbar title="TextApp" About="About TextApp" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform heading="Enter the text to analyze" mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>


  );

}

export default App;
