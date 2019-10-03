import React, { Component } from 'react';
// import PromoHeader from './PromoHeader.js';
// import SiteHeader from './SiteHeader.js';
// import MainNavigation from './MainNavigation.js';
// import '../styles/app.css';
import TopBar from './TopBar.js';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          {/* <PromoHeader /> */}
          <div id="full-topbar">
            <div id="content">
              <TopBar />
              {/* <SiteHeader /> */}
              {/* <MainNavigation /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
