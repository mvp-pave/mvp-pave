import React, { Component } from 'react';
import axios from 'axios';



 const ListItem = ({ storeInfo, id }) => {
   console.log("mother butthole2", id)
   return (
    <div>
      <div>{storeInfo.name}</div>
      <img src={storeInfo.image_url} alt=""/>
    </div>
   )
 };


 export default ListItem;