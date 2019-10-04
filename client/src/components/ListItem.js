import React, { Component } from 'react';
import axios from 'axios';



 const ListItem = ({ storeInfo, id }) => {
   console.log("mother butthole2", id)

  function handleClick(e){
    e.preventDefault();
    console.log('you clicked me', this.storeInfo.id)
  }

   return (
    <div>
      <div onClick={handleClick}> 
        <div>{storeInfo.name}</div>
        <div>{storeInfo.rating}</div>
        <div>{storeInfo.review_count}</div>
        <div>{storeInfo.location.city}</div>
        <img src={storeInfo.image_url} alt=""/>
      </div>
    </div>
   )
 };


 export default ListItem;