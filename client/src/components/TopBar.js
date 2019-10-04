import React, { Component } from 'react';
import { IoMdHeart } from "react-icons/io";
import { MdHome, MdLocationOn, MdPerson } from "react-icons/md";
import TopBarMenu from './TopBarMenu.js'

export default class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      burgerClick: false
    }
    this.handleBurgerClick = this.handleBurgerClick.bind(this)
  }
  handleBurgerClick(){
    this.setState({
      burgerClick: !this.state.burgerClick
    }, () => console.log('burgerClick', this.state.burgerClick))
  }
  render(){
    let menu;
    if (this.state.burgerClick){
      menu = <TopBarMenu currentUser={this.props.currentUser} clickHandler={this.props.clickHandler} changeCurrentUser={this.props.changeCurrentUser} />;
    } else {
      menu = <div></div>
    }
    return (
      <div>
            <div className='columns'>
              <div className='column'><MdHome size={30}/></div>
              <div className='column'><MdPerson size={30}/></div>
              <div className='column'><IoMdHeart size={30}/></div>
              <div className='column'><MdLocationOn size={30}/></div>
              <div className='column' onClick={this.handleBurgerClick}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
              </div>
            </div>
        {menu}
      </div>
    )
  }
}