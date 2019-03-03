import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BackgroundImage from './hompageback.jpg';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';


const styles = theme => ({
  button: {
    margin: '100px',
  },
  cssRoot: {
    color: theme.palette.getContrastText(pink[200]),
    margin: '10px',
    fontFamily: 'Montserrat',
    height: '80px',
    backgroundColor: '#e1b1af',
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
  input: {
    display: 'none',
  },
});


function Home(props) {
  const { classes } = props;
        return (
                    <div className="App" style={{backgroundImage: 'url(' + BackgroundImage + ')', width: '100%', height: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}}>
                        <header className="App-header">
                            <h1>Firm Fatale</h1>
                            <p className="subtitle">Helping women in business build their ideal femme-pire!</p>

                            <Link to="/find-a-femme"><Button variant="contained" color="primary" size="large" variant="contained"className={classes.button, classes.cssRoot}>Find-a-Femme</Button></Link>
                            <Link to="/card-share"><Button variant="contained" color="primary" size="large" variant="contained"className={classes.button, classes.cssRoot}>Card Share</Button></Link>
                        </header>
                        
                    </div>
        );
}

export default withStyles(styles)(Home);
