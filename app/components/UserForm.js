import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: false
    };
  }

  handleInputs(key, event) {
    this.setState({[key]: event.target.value})
  }

  render() {
    return (
      <form>
        {
          !this.props.userLoginError &&
          <div>false!</div>
        }
        {!this.state.signUp ?
          // if !signup & loginError
          // display error message
          <div>
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={ (event) => this.handleInputs('email', event) }
            />
            <input
              type="text"
              placeholder="password"
              value={this.state.password}
              onChange={ (event) => this.handleInputs('password', event) }
            />
            <button type="submit" onClick={ (event) => {
              event.preventDefault();
              this.props.verifyUserLogin(Object.assign({}, {email: this.state.email, password:this.state.password}));
            } }>Log In</button>

            <button type="submit" onClick={ (event) => {
              event.preventDefault();
              this.setState({
                signUp: true
              })
            } }>Sign Up</button>
          </div>
          :
          <div>
            <input
              type="text"
              placeholder="name"
              value={this.state.name}
              onChange={ (event) => this.handleInputs('name', event) }
            />
            <input
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={ (event) => this.handleInputs('email', event) }
            />
            <input
              type="text"
              placeholder="password"
              value={this.state.password}
              onChange={ (event) => this.handleInputs('password', event) }
            />
            <button type="submit" onClick={ (event) => {
              event.preventDefault();
              this.props.postUserSignUp(Object.assign({}, {name: this.state.name, email: this.state.email, password:this.state.password}));
            } }>Sign-Up</button>
          </div>
        }
      </form>
    )
  }
}
