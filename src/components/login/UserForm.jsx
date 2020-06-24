import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import AuthenticateCodePage from './AuthenticateCodePage';
import DashBoard from '../layout/DashBoard';
import  {FetchData} from '../../api';
import { Snackbar  } from "@material-ui/core";

export class UserForm extends Component {
  state = {
    step: 1,
    email: '',
    code: '',
    userColor:'',
    authUser:false,
    openSnackBar: true,
    snackBarMessage:''
  };


  // Proceed to next step
  nextStep = async() => {
    const fetchedData =await FetchData();
    this.emailValidation();
    console.log(fetchedData)
    const { step,email,code } = this.state;
     fetchedData.map(id=>{
      if(id.email===email&&step===1){
        this.setState({
          step: step + 1,
          userColor:id.color
        })
       }else
        if(id.code==code&&step===2){
        this.setState({
          step: step + 1
        });
       }
     })  
     
  };





  emailValidation = () => {
    //email validation
    if (this.state.email.length === 0) {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "Please Enter Email Id"
      });
    } else if (
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
    ) {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "Please Enter Valid Email"
      });
    }
    //Password validation
    else if (this.state.code.length === 0) {
      this.setState({
        openSnackBar: true,
        snackBarMessage: "Please Enter Password"
      });
    } else {
      this.setState({
        openSnackBar: false
      });
    }
  };



/** auto close SnackBar */
handleSnackClose = () => {
  this.setState({
    openSnackBar: false
  });
};





  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

 
 


  render() {
    const { step ,email,code ,userColor, openSnackBar, snackBarMessage} = this.state;
    const values = {email,code,userColor , openSnackBar, snackBarMessage};


    console.log( values);
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleSnackClose={this.handleSnackClose}
            openSnackBar={ this.openSnackBar}
            snackBarMessage={this.snackBarMessage}
          />
        );
      case 2:
        return (
          <AuthenticateCodePage
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
        );
        case 3:
          return (
            <DashBoard
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
          );
      default:
        (console.log('This is a multi-step form built with React.'))
    }
    
  }
}

export default UserForm;
