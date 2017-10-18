import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  yo() {
    console.log(this.props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button type="submit" onClick={ (event) => {
          event.preventDefault();
          this.yo()
          this.props.verifyUserLogin();
        } }>Log In</button>
      </form>
    )
  }
}
