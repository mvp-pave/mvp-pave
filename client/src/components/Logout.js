import React, { Component } from 'react';
import fire from '../config/Fire.js';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.setState = {}
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>HOMMMMMEE</div>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}