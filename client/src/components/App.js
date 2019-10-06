import React, { Component } from 'react';
import Search from './Search.js';
import TopBar from './TopBar.js';
// import SearchLocation from './SearchLocation.js';
import Login from './Login.js'
import CreateAccount from './CreateAccount.js'
import SuggestedBottom from './SuggestedBottom.js';
import List from './List.js'
import UpdateProfile from './UpdateProfile.js'

import REACT_APP_YELP_API_KEY from '../../../yelpconfig.js'
import axios from 'axios';

import { FaSistrix } from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLocation: false,
      currentUser: false,
      page: 'homepage',
      category: 'restaurant',
      results: [],
      info: [],
      profileIconClick: false
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHomeLocation = this.changeHomeLocation.bind(this);
    this.changeCurrentUser = this.changeCurrentUser.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this)
    this.returnToHomepage = this.returnToHomepage.bind(this);
    this.getStore = this.getStore.bind(this);
    this.handleProfileIconClick = this.handleProfileIconClick.bind(this);
    this.logoutCurrentUser = this.logoutCurrentUser.bind(this);
    this.profileClickHandler = this.profileClickHandler.bind(this);
  }

  componentDidMount() {
    if (!this.state.homeLocation) {
      let ids = ["WHHt_Jb8Tgidn9mW7oDnIg", "5i_RyzNnkaof6M64oZqxQA", "oVoj_A1FExfvI_7UbAdQgQ", "2h89smIl2aXxa2DyxSIFmg", "bVkavwJ8OgU4yPiUMoEOPg"]
      for (var i = 0; i < ids.length; i++) {
        this.getStore(ids[i])
      }
    } else {
      this.getRestaurants();
    }
  }

  clickHandler(e) {
    let name = e.target.getAttribute("class");
    this.setState({
      page: name
    })
  }

  profileClickHandler(e) {
    let name = e.target.getAttribute("class");
    if (this.state.currentUser) {
      this.setState({
        page: name
      })
    } else {
      this.setState({
        page: "login"
      })
    }
  }

  returnToHomepage() {
    this.setState({
      page: 'homepage'
    })
  }

  changeHomeLocation(location) {
    this.setState({ homeLocation: location }, () => this.getRestaurants());
  }

  changeCategory(event) {
    this.setState({ category: event.target.name }, () => this.getRestaurants());
  }

  changeCurrentUser(user) {
    this.setState({ currentUser: user });
  }

  logoutCurrentUser() {
    this.setState({ currentUser: false });
    location.reload();
  }

  getRestaurants() {
    if (this.state.homeLocation) {
      let key = REACT_APP_YELP_API_KEY()
      this.setState({ loading: true })
      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.homeLocation}`, {
        //required authorization format from API 
        headers: {
          Authorization: key
        },
        params: {
          categories: this.state.category,
          limit: 8
        }
      })
        .then((res) => {
          this.setState({ results: res.data.businesses })
        })
        .catch((err) => {
          console.log('fix the broke', err)
        })
    }
  }

  getStore(id) {
    let key = REACT_APP_YELP_API_KEY()
    this.setState({ loading: true })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: key
      },
      // params: {
      //     categories: `restaurant`,
      //     limit: 5
      // }
    })
      .then((res) => {
        let arr = this.state.results;
        arr.push(res.data)
        this.setState({ results: arr })
      })
      .catch((err) => {
        console.log(err)
        // this.setState({ errorState: `Sorry we couldn't find information related to the location you search, do you want to try something else?`, loading: false })
      })
  }

  handleProfileIconClick() {
    this.setState({
      profileIconClick: !this.state.profileIconClick
    })
  }

  render() {
    switch (this.state.page) {
      case 'homepage':
        return (
          <div>
            <div id="full-topbar">
              <img className="app-title" src={"../images/brand10.png"}></img>
              {/* <h2 className="app-title">PAVÉ</h2> */}
              <div><FaSistrix size={30} color={'#d9d9d9'} className='search' id="searchButton" onClick={this.clickHandler} /></div>
              <MdMailOutline size={30} color={'#d9d9d9'} className='mail' id="mailButton" onClick={this.clickHandler} />

              <br></br>
              <TopBar currentUser={this.state.currentUser} clickHandler={this.clickHandler}
                changeHomeLocation={this.changeHomeLocation} changeCurrentUser={this.changeCurrentUser}
                homeLocation={this.state.homeLocation} handleProfileIconClick={this.handleProfileIconClick}
                profileIconClick={this.state.profileIconClick} logoutCurrentUser={this.logoutCurrentUser}
                returnToHomepage={this.returnToHomepage} profileClickHandler={this.profileClickHandler} />
            </div>
            <p className="border-line-home" ></p>
            <div id="content">
              <SuggestedBottom changeHomeLocation={this.changeHomeLocation}
                homeLocation={this.state.homeLocation} handleProfileIconClick={this.handleProfileIconClick}
                profileIconClick={this.state.profileIconClick} />
              <List homeLocation={this.state.homeLocation} results={this.state.results} />
            </div>
            {/* update profile which works on click of Top Bar */}
            {/* should be inside top bar */}
          </div>
        )
      case 'search':
        return (<div><Search returnToHomepage={this.returnToHomepage} clickHandler={this.clickHandler} /></div>);
      case 'login':
        return (<div><Login returnToHomepage={this.returnToHomepage} clickHandler={this.clickHandler} changeCurrentUser={this.changeCurrentUser} /></div>);
      case 'createAccount':
        return (<div><CreateAccount clickHandler={this.clickHandler} changeCurrentUser={this.changeCurrentUser} returnToHomepage={this.returnToHomepage} /></div>);
      case 'profile':
        return (<div><UpdateProfile currentUser={this.state.currentUser} clickHandler={this.clickHandler}
          changeCurrentUser={this.changeCurrentUser} returnToHomepage={this.returnToHomepage} /></div>);
    }
  }
}
