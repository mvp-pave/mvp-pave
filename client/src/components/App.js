import React, { Component } from 'react';
import Search from './Search.js';
import TopBar from './TopBar.js';
// import SearchLocation from './SearchLocation.js';
import Login from './Login.js'
import CreateAccount from './CreateAccount.js'
import List from './List.js';
import SuggestedBottom from './SuggestedBottom.js';

import UpdateProfile from './UpdateProfile.js'

import { IoMdSearch } from 'react-icons/io';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLocation: false,
      currentUser: false,
      page: 'homepage',
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHomeLocation = this.changeHomeLocation.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
    this.returnToHomepage = this.returnToHomepage.bind(this);
  }

  clickHandler(e) {
    let name = e.target.getAttribute("class");
    this.setState({
      page: name
    }, () => console.log(this.state))
  }

  returnToHomepage() {
    this.setState({
      page: 'homepage'
    }, () => console.log("return to homepage", this.state))
  }

  changeHomeLocation() {
    this.setState({ homeLocation: true });
  }

  changeCurrentUser(user) {
    this.setState({ currentUser: user }, () => console.log("changeCurrentUser", this.state));
  }

  render() {
    switch (this.state.page) {
      case 'homepage':
        return (
          <div>
            <div id="full-topbar">
              <h2 className="app-title">PAVÉ</h2>
              <IoMdSearch size={40} className='search' id="searchButton" onClick={this.clickHandler} />
              <TopBar currentUser={this.state.currentUser} clickHandler={this.clickHandler} changeHomeLocation={this.changeHomeLocation} changeCurrentUser={this.changeCurrentUser} />
              <div id="content">
                {/* <List homeLocation={this.state.homeLocation} /> */}
                <SuggestedBottom changeHomeLocation={this.changeHomeLocation} />
              </div>
              {/* <div id="other-page-content">
                <SearchLocation clickHandler={this.clickHandler} />
              </div> */}
            </div>

            {/* update profile which works on click of Top Bar */}
            {/* should be inside top bar */}
          </div>
        )
      // case 'userProfile':
      //   return (<div><UserProfile /></div>);
      case 'search':
        return (<div><Search clickHandler={this.clickHandler} /></div>);
      case 'login':
        return (<div><Login returnToHomepage={this.returnToHomepage} clickHandler={this.clickHandler} changeCurrentUser={this.changeCurrentUser} /></div>);
      case 'createAccount':
        return (<div><CreateAccount clickHandler={this.clickHandler} changeCurrentUser={this.changeCurrentUser} returnToHomepage={this.returnToHomepage} /></div>);
      case 'profile':
        return (<div><UpdateProfile clickHandler={this.clickHandler} changeCurrentUser={this.changeCurrentUser} returnToHomepage={this.returnToHomepage} /></div>);
      }
  }
}
