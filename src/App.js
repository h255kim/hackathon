import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import FindAFemme from './FindAFemme';
import CardShare from './CardShare';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route path="/find-a-femme" exact component={FindAFemme} />
          <Route path="/card-share" exact component={CardShare} />

        </div>
      </Router>
    );
  }
}

export default App;
