import React, { Component } from 'react';
// import PromoHeader from './PromoHeader.js';
// import SiteHeader from './SiteHeader.js';
// import MainNavigation from './MainNavigation.js';
// import '../styles/app.css';
import Topbar from './TopBar.js';
import Search from './Search.js';
import List from './List.js';
import SuggestedBottom from './SuggestedBottom.js';
import { IoMdSearch } from 'react-icons/fa';
import Login from './Login.js'
import SearchLocation from './SearchLocation.js';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
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
              {/* <TopBar /> */}
              {/* <SiteHeader /> */}
              {/* <MainNavigation /> */}
              {/* <List /> */}
              <SuggestedBottom />
            </div>
            <div id="other-page-content">
              <Login />
              <SearchLocation />
            </div>
          </div>
        </div>
    )
  }
}

export default App;
