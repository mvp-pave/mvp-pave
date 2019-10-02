import React, { Component } from 'react';
import Login from './Login.js';
import Home from './Logout.js';
import fire from '../config/Fire.js';
// import PromoHeader from './PromoHeader.js';
// import SiteHeader from './SiteHeader.js';
// import MainNavigation from './MainNavigation.js';
// import '../styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(function (user) {
      console.log('user:', user);
      if (user) {
        // User is signed in.
        this.setState({ user }, () => console.log('user –––––> ', this.state.user));
      } else {
        // No user is signed in.
        this.setState({ user: null }, () => console.log('user –––––> ', this.state.user))
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
        {/* <PromoHeader /> */}
        {/* <div id="full-topbar"> */}
        {/* <div id="content"> */}
        {/* <SiteHeader /> */}
        {/* <MainNavigation /> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}
