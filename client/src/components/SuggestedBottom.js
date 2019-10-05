import React, { Component } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SearchLocation from './SearchLocation.js';

export default class SuggestedBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { handleProfileIconClick, profileIconClick, homeLocation, changeHomeLocation, changeCategory } = this.props;
    let locationPopup;
    if ((homeLocation === false && profileIconClick) || (homeLocation !== false && profileIconClick)) {
      locationPopup = <SearchLocation className='search-location' handleProfileIconClick={handleProfileIconClick} changeHomeLocation={changeHomeLocation} />;
    } else {
      locationPopup = <div></div>
    }
    return (
      <div>
        <div className="sug-main-title">PAVÉ YOUR WAY</div>
        <div className="container-suggested-bottom">
          <div className="arrow-container">
            {/* <div>
              <IoIosArrowBack className="arrow-back" size={50} />
            </div> */}
          </div>
          <div className="all-imgs-home">
            <div className="img-container">
              <img className="img-sugg" src="./images/food.jpeg" onClick={handleProfileIconClick} name="restaurants" onClick={changeCategory} ></img>
              <div className="title-container">
                <div className="sugg-title">Food</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src="./images/dessert.jpeg" onClick={handleProfileIconClick} name="dessert" onClick={changeCategory} ></img>
              <div className="title-container">
                <div className="sugg-title">Dessert</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src="./images/drinks.jpeg" onClick={handleProfileIconClick} name="bars" onClick={changeCategory} ></img>
              <div className="title-container">
                <div className="sugg-title">Drinks</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src="./images/experiences.jpeg"></img>
              <div className="title-container">
                <div className="sugg-title">Experiences</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src="./images/connect.jpeg"></img>
              <div className="title-container">
                <div className="sugg-title">Connections</div>
              </div>
            </div>
          </div>
          <div className="arrow-container">
            {/* <div>
              <IoIosArrowForward className="arrow-back" size={50} />
            </div> */}
          </div>
        </div>
        {locationPopup}
      </div >
    )
  }
}

// CSS
// .img-container {
// 	float: left;
// }

// img {
// 	height: 200px;
// 	width: 200px;
// 	display: block;
// 	position: relative;
// 	left: 70px;
// 	border-radius: 20px;
// }

// .title {
// 	position: relative;
// 	width: 50px;
// 	height: 20px;
// 	border-bottom-left-radius: 20px;
// 	border-bottom-right-radius: 20px;
// 	left: 70px;
// 	bottom: 40px;
// 	background: white;
// 	font-size: 20px;
// 	text-align: center;
// 	padding-top: 16px !important;
// 	padding-left: 16px !important;
// 	padding-right: 136px !important;
// 	padding-bottom: 16px;
// }

// h2 {
// 	font-size: 40px;
// 	text-align: center;
// }