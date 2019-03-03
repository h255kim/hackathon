import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './App.css';


const styles = theme => ({
 root: {
   flexGrow: 1,
 },
 paper: {
   padding: theme.spacing.unit * 2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
 text: {
   color: 'purple'
 }
});

const mapStyles = {
 width: '80%',
 height: '80%'
};

function FindAFemme(props) {
 const { classes, google } = props;

 return (
   <div className={classes.root}>
     <Grid container spacing={24}>
       <Grid item xs={12}>
         <Paper className={classes.paper}>Find-a-Femme</Paper>
       </Grid>
       <Grid item xs={12}>
         <Paper className={classes.paper} justify = "center" direction="column" alignItems = "center">
         <Map
                 google={google}
                 zoom={14}
                 style={mapStyles}
                 initialCenter={{
                  lat: -1.2884,
                  lng: 36.8233
                 }}
               />
         </Paper>
       </Grid>
     </Grid>
   </div>
 );
}

FindAFemme.propTypes = {
 classes: PropTypes.object.isRequired
};

export default withStyles(styles)( GoogleApiWrapper({
 apiKey: 'AIzaSyDHPclKWBWCitdPzcV29V-OpQ4YvQQ6k5A'
})(FindAFemme));