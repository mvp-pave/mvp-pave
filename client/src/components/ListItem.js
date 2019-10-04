import React, { Component } from 'react';
import axios from 'axios';



 const ListItem = ({ storeInfo, id }) => {
   console.log("mother butthole2", id)

  function handleClickDiv(e){
    e.preventDefault();
    console.log('you clicked the div')
  }

   return (
    <div>
      <div onClick={handleClickDiv}> 
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