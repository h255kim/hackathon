import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
});

const mapStyles = {
 width: '100%',
 height: '100%',
};

function FindAFemme(props) {
 const { classes, google } = props;

 return (
   <div className={classes.root}>
     <Grid container spacing={24}>
       <Grid item xs={12}>
         <Paper className={classes.paper}>Find-a-Femme</Paper>
       </Grid>
     </Grid>
     <Map
             google={google}
             zoom={14}
             style={mapStyles}
             initialCenter={{lat: 43.0782811, lng: -77.6839168}} >
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{}}
              icon={{
                url: "http://www.bookyourparis.com/images-site/beachflag.png",
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)}}/>
      </Map>

   </div>
 );
}

FindAFemme.propTypes = {
 classes: PropTypes.object.isRequired
};

export default withStyles(styles)( GoogleApiWrapper({
 apiKey: 'AIzaSyDHPclKWBWCitdPzcV29V-OpQ4YvQQ6k5A'
})(FindAFemme));
