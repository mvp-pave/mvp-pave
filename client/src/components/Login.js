import React, { Component } from 'react';
import fire from '../config/Fire.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(event) {
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => { })
      .catch((error) => console.log(error))
  }

  signup(event) {
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => { })
      .catch((error) => console.log(error))
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" onChange={this.handleChange}></input>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
          <button type="submit" onClick={this.login}>Login</button>
          <button onClick={this.signup}>Sign Up</button>
        </form>
      </div>
    )
  }
}