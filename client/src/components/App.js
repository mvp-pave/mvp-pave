import React, { Component } from 'react';
import Topbar from './TopBar.js';
import Search from './Search.js';
import List from './List.js';
import SuggestedBottom from './SuggestedBottom.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <div>
        <h2>PAVÉ</h2>
        <Search />
        <Topbar />
        <List />
        <SuggestedBottom />
      </div>
    )
  }
}
