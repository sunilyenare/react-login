import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {Card,CardContent,Typography,Grid,Button,TextField} from '@material-ui/core';
import styles from './login.module.css'

import cx from 'classnames';


export class AuthenticateCodePage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { values, handleChange } = this.props;
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
                         <h4>Verify Code</h4>
                         </CardContent>
                          <CardContent>
                               <TextField
                                     placeholder="Enter Code"
                                     label="Code"
                                     onChange={handleChange('code')}
                                     defaultValue={values.code}
                                     margin="normal"
                                     fullWidth
                              />
                            <br />
                            <Button
                                   color="secondary"
                                  variant="contained"
                                  onClick={this.back}
                                 >Back</Button>
                           <Button
                                      color="primary"
                                      variant="contained"
                                      onClick={this.continue}
                          >Log In
                          </Button>
                        </CardContent>
                    </Grid>
                          
               </MuiThemeProvider>
      </div>
    );
  }
}

export default AuthenticateCodePage;
