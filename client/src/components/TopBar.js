import React, { Component } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { GoHome, GoLocation } from "react-icons/go";
import { MdPersonOutline } from "react-icons/md";

import TopBarMenu from './TopBarMenu.js'
import SearchLocation from './SearchLocation.js';


export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClick: false,
      // profileIconClick: false
    }
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    // this.handleProfileIconClick = this.handleProfileIconClick.bind(this);
  }
  handleBurgerClick() {
    this.setState({
      burgerClick: !this.state.burgerClick
    }, () => console.log('burgerClick', this.state.burgerClick))
  }
  // handleProfileIconClick(){
  //   this.setState({
  //     profileIconClick: !this.state.profileIconClick
  //   })
  // }
  render() {
    let menu;
    if (this.state.burgerClick) {
      menu = <TopBarMenu currentUser={this.props.currentUser} clickHandler={this.props.clickHandler} changeCurrentUser={this.props.changeCurrentUser} />;
    } else {
      menu = <div></div>
    }
    let { homeLocation, handleProfileIconClick, profileIconClick, changeHomeLocation } = this.props;
    let locationPopup;
    if ((homeLocation === false && profileIconClick) || (homeLocation !== false && profileIconClick)) {
      locationPopup = <SearchLocation className='search-location' handleProfileIconClick={handleProfileIconClick} changeHomeLocation={changeHomeLocation}/>;
    } else {
      locationPopup = <div></div>
    }
    return (
      <div>
        <div className='columns'>
          <div className='column'><img src={'./images/profile.png'} className="profile" onClick={this.props.clickHandler} ></img></div>
          <div className='column'><img src={'./images/heart.png'} ></img></div>
          <div className='column'><img src={'./images/compass.png'} onClick={handleProfileIconClick} ></img></div>
          {/* <div className='column'><GoHome size={28} /></div>
          <div className='column'><MdPersonOutline size={28} className="profile" onClick={this.props.clickHandler} /></div>
          <div className='column'><IoIosHeartEmpty size={28} /></div>
          <div className='column'><GoLocation size={28} onClick={handleProfileIconClick} /></div> */}
          <div className='column' onClick={this.handleBurgerClick}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
        </div>
        {locationPopup}
        {menu}
      </div>
    )
  }
}