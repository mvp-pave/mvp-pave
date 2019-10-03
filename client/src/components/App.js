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
      homeLocation: false
    }
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.handleClickInside = this.handleClickInside.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }

  // setWrapperRef(node) {
  //   this.wrapperRef = node;
  // }

  // handleClickOutside(event) {
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
  //     this.setState({ searchClicked: false }, () => this.setState({ query: '', location: '' }));
  //   }
  // }

  // handleClickInside() {
  //   this.setState({ searchClicked: true });
  // }

  // mouseOut() {
  //   this.setState({ moused: false });
  // }

  // mouseOver() {
  //   this.setState({ moused: true });
  // }

  render() {
    //<IoMdSearch />
    return (
      // <Router>
        <div>
          <div id="full-topbar">
            <h2>PAVÉ</h2>
            {/* <Link to="/search" >hi</Link> */}
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
          
          {/* <Switch>
            <Route exact path='/search' render={(props) => <Search {...props} homeLocation={this.state.homeLocation} />}/>
          </Switch> */}
        </div>
      // </Router>
    )
  }
}

export default App;
