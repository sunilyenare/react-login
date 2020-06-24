import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Card,CardContent,Snackbar ,Grid,Button,TextField} from '@material-ui/core';
import styles from './login.module.css'

import cx from 'classnames';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
close=e=>{
  e.preventDefault();
  this.props.handleSnackBarClose()
}
  render() {
    const { values, handleChange ,openSnackBar, snackBarMessage} = this.props;

    return (
      <div className={styles.container}>
               <MuiThemeProvider>
                    <Grid item component={Card} xs={12} sm={6} className={cx(styles.card,styles.login)}>  
                          <CardContent>
                          <img
                                 width='70%' 
                                 height='51%'
                                 marginLeft='5%'
                                 position='center'
                                 src={require('../../assets/tw.png')}
                                alt="icon"
                            />
                         <h4>Sign in</h4>
                         </CardContent>
                          <CardContent>
                               <TextField
                                     placeholder="Enter Your Email"
                                     label="Email"
                                     onChange={handleChange('email')}
                                     defaultValue={values.email}
                                     margin="normal"
                                     fullWidth
                              />
                            <br />
                           <Button
                                      color="primary"
                                      variant="contained"
                                      onClick={this.continue}
                          >Continue
                          </Button>
                        </CardContent>
                       
                    </Grid>
                          
               </MuiThemeProvider>
      </div>
    );
  }
}

export default FormUserDetails;
