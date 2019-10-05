import React, { Component } from 'react';
import axios from 'axios';

const Restaurant = ({info}) => {

  console.log("this is from Restaurants", info)

if (info) {
  return (
    <div className="restContainer">
      <div className="restName">{info.name}</div>
      <div className="restAddress">{info.location.address1}<span className="restCity">{`, ${info.location.city}`}</span></div>
      <div className="restPhone">{info.phone}</div>
      <div className="restRating">{info.rating}<span className="restReview">{` (${info.review_count})`}</span></div>
      <img src={info.photos[2]} alt="" className="restPics"/>
    </div>
  )
} else {
  return (
    <div>
      still loading... please wait...
    </div>
  )
}
}

export default Restaurant; 