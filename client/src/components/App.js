import React, { Component } from 'react';
import Topbar from './TopBar.js';
import Search from './Search.js';
import List from './List.js';
import SuggestedBottom from './SuggestedBottom.js';
import { IoMdSearch } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchClicked: false,
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ searchClicked: false }, () => this.setState({ query: '', location: '' }));
    }
  }

  handleClickInside() {
    this.setState({ searchClicked: true });
  }

  // mouseOut() {
  //   this.setState({ moused: false });
  // }

  // mouseOver() {
  //   this.setState({ moused: true });
  // }

  render() {
    return (
      <Router>
      <div>
        <div id="full-topbar">
          <h2>PAVÉ</h2>
          <Link to="/search" onClick={this.handleClickInside} ><IoMdSearch /></Link>
          <Search searchClicked={this.state.searchClicked} />

          <Topbar />
          <div id="content">
            <List />
            <SuggestedBottom />
          </div>
        </div>
        <Switch>
        <Route exact path="/search" component={Search} />
      </Router>
    )
  }
}
