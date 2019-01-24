import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import paceman from './paceman.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="Topnav">
            <div><Link style={Style.link} to="/">Home</Link></div>
            <div><Link style={Style.link} to="/users/">Writes</Link> </div>
            <div><Link style={Style.link} to="/about/">About</Link> </div>
          </div>
          <header className="App-header">
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Home} />
          </header>
        </div>
      </Router>
    );
  }
}

const Style = {
  container: {
    fontSize: "15px",
    textAlign: "center",
    padding: "16px"
  },
  mainHeader: {
    color: "#61dafb",
    textAlign: "center",
    margin: "0",
    fontSize: "45px",
    letterSpacing: "0.05em",
    fontWeight: "400"
  },
  text: {
    color: "#FFFFFF"
  },
  navStyle: {
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333333",
    color: "#FFFFFF"
  },
  link: {
    display: "block",
    color: "#FFF",
    marginTop: "20px"
  }


};

export default App;

