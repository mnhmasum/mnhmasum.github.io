import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import UsaRadioAll from './components/UsaRadioAll.js';
import AmarEnglishBuddy from './components/AmarEnglishBuddy.js';
import EnglishHindiDictionary from './components/EnglishHindiDictionary.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Topnav" style={Style.navStyle}>
          
          </div>
          <header className="App">
            <Route path="/" exact component={Home} />
            <Route path="/privacy-policy-usa-radio-all/" component={UsaRadioAll} />
            <Route path="/amar-english-buddy/" component={AmarEnglishBuddy} />
            <Route path="/english-hindi-dictionary/" component={EnglishHindiDictionary} />
            <Route path="/about/" component={About} />
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

