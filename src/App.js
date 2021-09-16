/*import logo from './logo.svg';*/
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextApp" About="About TextApp" />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Textform heading="Enter the text to analyze" />
            </Route>
          </Switch>
        </div>
      </Router>

    </>
  );

}

export default App;
