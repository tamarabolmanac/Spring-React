import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style/Login.css";
import "./style/Login2.css";

class Auth extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }

      handleSubmit = event => {
        event.preventDefault();
      }

      validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }

      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      }

    render() {
        return (
            <div class="card card-container">
            <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="Some desc"/>
                <form onSubmit={this.handleSubmit} className="form-signin">
                <FormGroup controlId="email" >
            <FormLabel className="form-contro">Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            disabled={!this.validateForm()}
            type="submit"
            className="btn btn-lg btn-primary btn-block btn-signin"
          >
            Login
          </Button>
                </form>    
            </div>
        );
    }

}

export default Auth;