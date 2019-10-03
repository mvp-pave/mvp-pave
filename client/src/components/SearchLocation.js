import React from 'react';
import { MdCancel } from "react-icons/md";

let SearchLocation = () => {
  return (
    <div className="fullscreen-container">
      <div className="search-location-modal">
      <form className="search-location">
          <div className="search-location-container">
            <input type="search-location" name="email" className="email" placeholder="Search Location"></input>
            <MdCancel className="icons" size={30} />
          </div>
          <div>
            <button className="searching-location"><span className="loc-txt">Use Current Location</span></button>
          </div>
      </form>
      </div>
    </div>
  )
}

export default SearchLocation;