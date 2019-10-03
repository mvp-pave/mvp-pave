import React, { Component } from 'react';
import Topbar from './TopBar.js';
import Search from './Search.js';
import List from './List.js';
import SuggestedBottom from './SuggestedBottom.js';
import { IoMdSearch } from 'react-icons/fa';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClicked: false,
      homeLocation: false, 
      currentUserEmail: false,
      page: 'homepage',
    }
    this.handleClickInside = this.handleClickInside.bind(this);
    this.handleCancelSearch = this.handleCancelSearch.bind(this);
  }

  handleClickInside() {
    this.setState({ searchClicked: true });
  }

  handleCancelSearch() {
    this.setState({ searchClicked: false });
  }

  // mouseOut() {
  //   this.setState({ moused: false });
  // }

  // mouseOver() {
  //   this.setState({ moused: true });
  // }

  render() {
    switch(this.state.page){
      case 'homepage':
        return (<div><Homepage clickHandler={this.clickHandler}/></div>);
      case 'userprofile':
        return (<div><UserProfile userAlert={this.state.userAlert}/></div>);
      case 'login':
        return (<div><Login loginHandler={this.loginHandler}/></div>);
      case 'register':
        return (<div><Registration registerHandler={this.registerHandler} userAlert={this.state.userAlert}/></div>);
    }
    return (
        <div>
          <div id="full-topbar">
            <h2>PAVÉ</h2>
            <div ><IoMdSearch /></div>
            <Topbar />
            <div id="content">
              <List />
              <SuggestedBottom />
            </div>
          </div>
        </div>
    )
  }
}
