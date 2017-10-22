import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PromptContainer from '../containers/PromptContainer';

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: false
    };
  }

  handleInputs(key, event) {
    this.setState({[key]: event.target.value});
  }

  inputRender(type) {
    return (
      <input
        type="text"
        placeholder={type}
        value={this.state.type}
        onChange={ (event) => this.handleInputs(type, event) }
      />
    );
  }

  render() {
	 
    return (
      <form>
        {!this.state.signUp ?
          <div>
            {
              this.props.userLoginError &&
              <PromptContainer  className="login-error"/>
            }
            {this.inputRender('email')}
            {this.inputRender('password')}
            <button type="submit" onClick={ (event) => {
              event.preventDefault();
              this.props.verifyUserLogin(Object.assign({}, {
                email: this.state.email,
                password:this.state.password}));
            } }>Log In</button>
            <h2 onClick={ () => {
              this.setState({
                signUp: true
              });
            } }>Sign Up</h2>
          </div>
          :
          <div>
            {
              this.props.userLoginError &&
              <PromptContainer  className="sign-in-error"/>
            }
            {this.inputRender('name')}
            {this.inputRender('email')}
            {this.inputRender('password')}
            <button type="submit" onClick={ (event) => {
              event.preventDefault();
              this.props.postUserSignUp(
                Object.assign({}, {
                  name: this.state.name,
                  email: this.state.email,
                  password:this.state.password}));
            } }>Sign-Up</button>
          </div>
        }
      </form>
    );
  }
}

UserForm.propTypes = {
  userLoginError: PropTypes.bool,
  verifyUserLogin: PropTypes.func,
  postUserSignUp: PropTypes.func
};
