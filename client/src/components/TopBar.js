import React, { Component } from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdHome, MdLocationOn, MdPerson } from "react-icons/md";
import TopBarMenu from './TopBarMenu.js'
import SearchLocation from './SearchLocation.js';


export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClick: false,
      profileIconClick: false
    }
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleProfileIconClick = this.handleProfileIconClick.bind(this);
  }
  handleBurgerClick() {
    this.setState({
      burgerClick: !this.state.burgerClick
    }, () => console.log('burgerClick', this.state.burgerClick))
  }
  handleProfileIconClick(){
    this.setState({
      profileIconClick: !this.state.profileIconClick
    })
  }
  render() {
    let menu;
    if (this.state.burgerClick) {
      menu = <TopBarMenu currentUser={this.props.currentUser} clickHandler={this.props.clickHandler} changeCurrentUser={this.props.changeCurrentUser} />;
    } else {
      menu = <div></div>
    }
    let { homeLocation } = this.props;
    let locationPopup;
    if ((homeLocation === false && this.state.profileIconClick) || (homeLocation !== false && this.state.profileIconClick)) {
      locationPopup = <SearchLocation className='search-location' handleProfileIconClick={this.handleProfileIconClick}/>;
    } else {
      locationPopup = <div></div>
    }
    return (
      <div>
        <div className='columns'>
          <div className='column'><MdHome size={30} /></div>
          <div className='column'><MdPerson size={30} className="profile" onClick={this.props.clickHandler} /></div>
          <div className='column'><IoMdHeart size={30} /></div>
          <div className='column'><MdLocationOn size={30} onClick={this.handleProfileIconClick}/></div>
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