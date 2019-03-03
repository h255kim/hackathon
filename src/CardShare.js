import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import axios from './axios-order';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// function rand() {
//   return 
// }

function getModalStyle() {
  const top = 5;
  const left = 300;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(${top}%, ${left}%)`,
  };
}

const styles = theme => ({
  root: {
    height: 'calc(100vh - 5px)',
  },

  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CardShare extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      fullName: "",
      email: "",
      phoneNumber: "",
      position: "",
      note: "",
      loadedCards: {}
    }
  }

  submitHandler = () => {
    const card = {
      fullName: this.state.fullName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      position: this.state.position,
      note: this.state.note
    };

    axios.post('/cards.json', card)
      .then(response => {
        console.log(response)
        this.setState({
          fullName: '',
          email: '',
          phoneNumber: '',
          position: '',
          note: '',
          isOpen: false
        });
        this.componentWillMount();
      })
      .catch(error => console.log(error));
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleModalOpen = () => {
    this.setState({ isOpen: true })
  }

  handleModalClose = () => {
    this.setState({
      fullName: '',
      email: '',
      phoneNumber: '',
      position: '',
      note: '',
      isOpen: false
    });
  }

  componentWillMount() {
    axios.get('https://hackathon-18fc4.firebaseio.com/cards.json')
      .then(response => {
        console.log(response.data);
        this.setState({ loadedCards: response.data });
      });
  }

  listOfCards = () => {
    console.log(Object.keys(this.state.loadedCards));

    let keys = Object.keys(this.state.loadedCards)
    var listOfCards = keys.map(key => this.state.loadedCards[key]);
    console.log(listOfCards)

    const { classes } = this.props

    return listOfCards.map((obj, i) => {
      console.log(obj);

      return <Grid item xs={3} key={i}>
        <Paper className={classes.paper2}>
        <Typography variant="h5" style={{ fontWeight: 800, marginBottom: '10px' }}>{obj.fullName}</Typography>
          <div><Typography align="left"> <span style={{ fontWeight: 700 }}>Email</span>: {obj.email}</Typography></div>
          <div><Typography align="left"><span style={{ fontWeight: 700 }}>Phone: </span>{obj.phoneNumber}</Typography></div>
          <div><Typography align="left"><span style={{ fontWeight: 700 }}>Position: </span>{obj.position}</Typography></div>
          <div><Typography align="left"><span style={{ fontWeight: 700 }}>Note: </span>{obj.note}</Typography></div>
        </Paper>
      </Grid>
    })
  }

  render() {
    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Card Share</Paper>
          </Grid>
        </Grid>

        <div style={{ margin: '15px' }}>
        
        <Button onClick={this.handleModalOpen} variant="contained" color="primary" style={{ margin: '10px 10px 10px 0px'}}>add card</Button>

        <Grid container spacing={24}>
          {this.listOfCards()}
        </Grid>

        </div>



        <Dialog open={this.state.isOpen}>
          <div>
            <DialogTitle id="simple-dialog-title"><Typography variant="h4">Add your business card!</Typography></DialogTitle>
<div style={{ margin: '10px' }}>
            <form style={{ display: 'flex', flexDirection: 'column' }} className={classes.container} noValidate autoComplete="off">

              <TextField
                id="standard-dense"
                label="Full Name"
                // className={classNames(classes.textField, classes.dense)}
                margin="dense"
                value={this.state.fullName}
                onChange={this.handleChange('fullName')}
                required={true}
              />
              <TextField
                id="standard-dense"
                label="Email"
                // className={classNames(classes.textField, classes.dense)}
                margin="dense"
                value={this.state.email}
                onChange={this.handleChange('email')}
                required={true}
              />
              <TextField
                id="standard-dense"
                label="Phone Number"
                // className={classNames(classes.textField, classes.dense)}
                margin="dense"
                value={this.state.phoneNumber}
                onChange={this.handleChange('phoneNumber')}
                required={true}
              />
              <TextField
                id="standard-dense"
                label="Position"
                // className={classNames(classes.textField, classes.dense)}
                margin="dense"
                value={this.state.position}
                onChange={this.handleChange('position')}
                required={true}
              />
              <TextField
                id="standard-dense"
                label="Note"
                // className={classNames(classes.textField, classes.dense)}
                margin="dense"
                value={this.state.note}
                onChange={this.handleChange('note')}
              />



            </form>
            </div>
            <div style={{ margin: '10px' }}>
            <Button variant="contained" color="primary" onClick={this.submitHandler} style={{ marginRight: '10px'}}>submit</Button>
            <Button variant="contained" color="secondary" onClick={this.handleModalClose}>cancel</Button>
          </div>
          </div>
        </Dialog>



        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfw6qGWGvnKqqy6HhWZSsrXa0KXE5E2jYKZgpa5y7GO8wJyUw/viewform?embedded=true" height="100%" frameborder="0" marginheight="0" marginwidth="0" width="100%">Loading...</iframe> */}
      </div>
    );
  }
}

CardShare.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardShare);
