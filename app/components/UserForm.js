import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleInputs(key, event) {
    this.setState({[key]: event.target.value})
  }

  render() {
    return (
      <form>
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
          this.props.verifyUserLogin(this.state);
        } }>Log In</button>
      </form>
    )
  }
}
