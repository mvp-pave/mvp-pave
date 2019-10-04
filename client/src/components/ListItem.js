import React, { Component } from 'react';
import axios from 'axios';



 const ListItem = ({ storeInfo, id, getIdHandleClick, getRestaurant }) => {  

  console.log("pcLI", storeInfo.id);

   return (
    <div className="listItemContainer">
      <div onClick={(e) => getIdHandleClick(e, storeInfo.id)} className="listItemContainer2"> 
        <div className="listItemName">{storeInfo.name}</div>
        <div className="listItemRating">{storeInfo.rating}</div>
        <div className="listItemReviews">{storeInfo.review_count}</div>
        <div className="listItemCity">{storeInfo.location.city}</div>
        <img src={storeInfo.image_url} alt="" className="listItemImg"/>
      </div>
    </div>
  )
};


export default ListItem;