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
        <div className="sug-title">PAVÉ THE WAY</div>
        <div className="container-suggested-bottom">
        <div className="arrow-container">
          <div>
            <IoIosArrowBack className="arrow-back" size={50}/>
          </div>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
          <div className="title-container">
            <div className="title">Food</div>
          </div>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
          <div className="title-container">
            <div className="title">Drinks</div>
          </div>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
          <div className="title-container">
            <div className="title">Experiences</div>
          </div>
        </div>
        <div className="img-container">
          <img src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"></img>
          <div className="title-container">
            <div className="title">Connections</div>
          </div>
        </div>
        <div className="arrow-container">
          <div>
            <IoIosArrowForward className="arrow-back" size={50}/>
          </div>
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