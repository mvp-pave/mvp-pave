import React, { Component } from 'react';
import { IoIosStar } from "react-icons/io";



const ResultItem = ({ storeInfo, id, getIdHandleClick }) => {

  // console.log("pcLI", storeInfo.id);

  return (
    <div onClick={(e) => getIdHandleClick(e, storeInfo.id)} className="listItemContainer">
      <img src={storeInfo.image_url} alt="" className="listItemImg" />
      <div className="listInfo">
        <div className="reccommended">Recommended By</div>
        <div className="listItemRating"><IoIosStar className="star-img" size={12} color={"red"} />{storeInfo.rating} <span className="listItemReviews">{` (${storeInfo.review_count})`}</span></div>
        <div className="listItemCity">{storeInfo.location.city.toUpperCase()}</div>
        <div className="listItemName">{storeInfo.name}</div>
        <div className="listItemPrice">{storeInfo.price}</div>
      </div>
    </div>
  )
};


export default ResultItem;