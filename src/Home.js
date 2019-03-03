import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Home extends Component {
    render() {
        return (
                <body>
                    <div className="App">
                        <header className="App-header">
                            <p>Firm Fatale</p>
                            <Link to="/find-a-femme"><button className="btn findafemme">Find-a-Femme</button></Link>
                            <Link to="/card-share"><button className="btn findafemme">Card Share</button></Link>
                        </header>

                    </div>
                </body>
        );
    }
}

export default Home;