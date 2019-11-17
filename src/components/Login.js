import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      email: '',
      password: ''
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  badCreds = () => {
    alert("Bad Credentials");
  }


  render(){
    return(
      <div style={{display: 'inline-flex',  justifyContent:'center', alignItems:'center', height: '100vh', 'flex-direction': 'column',  marginLeft: '40%'}}>
        <img src={require('../Håbe.svg')}  alt={'none'} style={{marginBottom: '3%'}}/>
        <h5> An easier way to find interesting and relevant content </h5>
        <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} style={{marginBottom: '4%'}}  />
        <input type="text" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} style={{marginBottom: '7%'}}  />
        {this.state.email === 'mo@mo.com' && this.state.password === 'mo' ? (
          <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} href={"/home"}>
            Login
          </Button>
        ) : (
          <Button variant="contained" style={{backgroundColor: '#6646EE', color: '#FFFFFF', marginBottom: '4%'}} onClick={this.badCreds}>
            Login
          </Button>
          )}

        <a href={'/login'}> Forgot Password </a>
      </div>
    )
  }

}
export default Login;
