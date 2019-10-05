import React, { Component } from 'react';
import {MdPhone, MdLocationOn} from 'react-icons/md';
import {IoIosHeartEmpty, IoIosHeart} from 'react-icons/io'

const Restaurant = ({info, likeHandleClick, clickedHeart}) => {

  if (info) {
    return (
      <div className="restContainer">
        <span className="closeModal">x</span>
        <div className="restName">{info.name} <span onClick={(e) => likeHandleClick(e)} > {clickedHeart ? <IoIosHeart className="likedIcon" color={"red"}/> : <IoIosHeartEmpty className="likedIcon"/>} </span></div>
        <img src={info.photos[2]} alt="" className="restPics"/>
        <div className="restAddress"><MdLocationOn className="locationIconRest"/>{info.location.address1}<span className="restCity">{`, ${info.location.city}`}</span></div>
        <div className="restPhone"><MdPhone className="phoneIconRest"/>{info.phone}</div>
        <div className="restRating">{info.rating}<span className="restReview">{` (${info.review_count})`}</span></div>
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