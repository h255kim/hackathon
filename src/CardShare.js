import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    height: 'calc(100vh - 5px)',
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Card Share</Paper>
        </Grid>
      </Grid>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfw6qGWGvnKqqy6HhWZSsrXa0KXE5E2jYKZgpa5y7GO8wJyUw/viewform?embedded=true" height="100%" frameborder="0" marginheight="0" marginwidth="0" width="100%">Loading...</iframe>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
