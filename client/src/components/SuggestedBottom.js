import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default class SuggestedBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="sug-main-title">PAVÉ THE WAY</div>
        <div className="container-suggested-bottom">
          <div className="arrow-container">
            {/* <div>
              <IoIosArrowBack className="arrow-back" size={50} />
            </div> */}
          </div>
          <div className="all-imgs">
            <div className="img-container">
              <img className="img-sugg" src="./images/food.jpeg"></img>
              <div className="title-container">
                <div className="sugg-title">Food</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src="./images/drinks.jpeg"></img>
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