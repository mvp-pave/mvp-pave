import React, { Component } from 'react';
import { MdPhone, MdLocationOn } from 'react-icons/md';
import { IoIosHeartEmpty, IoIosHeart, IoIosStar } from 'react-icons/io'

const Restaurant = ({ info, likeHandleClick, clickedHeart, closeModalClick }) => {

  if (info) {
    let recc;
    clickedHeart ? recc = "Remove from your recommendations" : recc = "Add to your recommendations"
    return (
      <div className="all-restContainer">
        <div className="restContainer">
          <span className="closeModal" onClick={(e) => closeModalClick(e)}><img src="./images/X.png" className="closing"></img></span>
          <div className="innerRestContainer">
            <div className="restName">{info.name} <span onClick={(e) => likeHandleClick(e)} > {clickedHeart ? <IoIosHeart className="likedIcon" size={25} color={"#ffbb99"} /> : <IoIosHeartEmpty size={25} className="likedIcon" />} </span></div>
            <div className="reccommendFriend" onClick={(e) => likeHandleClick(e)}>{recc}</div>
            <div className="all-rest-imgs">
              <img src={info.photos[2]} alt="" className="restPics" />
              <img src={info.photos[1]} alt="" className="restPics" />
              <img src={info.photos[0]} alt="" className="restPics" />
            </div>
            <div className="restInfo">
              <div className="restAddress"><MdLocationOn className="locationIconRest" />{info.location.address1}<span className="restCity">{`, ${info.location.city}`}</span></div>
              <div className="restPhone"><MdPhone className="phoneIconRest" />{info.phone}</div>
              <div className="restRating"><IoIosStar className="star-img" size={12} color={"red"} />{info.rating}<span className="listItemReviews">{` (${info.review_count})`}</span></div>
              <div className="restPrice">{info.price}</div>
              <div className="viewReccommended">Recommended By</div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default Restaurant; 