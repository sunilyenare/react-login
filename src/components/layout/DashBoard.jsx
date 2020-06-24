import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Dashboard_module.css';
import { List, ListItem, ListItemText } from '@material-ui/core/';



export  class DashBoard extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
  const userColor23='#ff9100'
    const {
      values: { email,code,userColor }
    } = this.props;
    console.log('#############')
    console.log( this.props);
  return (
    
   <div className={styles.container}>
      <AppBar position="static" style={{ background:userColor }} >
        <Toolbar>
          <IconButton edge="start"  aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <List>
              <ListItem>
              <h5><ListItemText primary="Welcome" secondary={email } /></h5>  
              </ListItem>
             
      </List>
    </div>
  );
}
}
export default DashBoard;