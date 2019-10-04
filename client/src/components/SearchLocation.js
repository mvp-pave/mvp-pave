import React from 'react';
import { MdCancel } from "react-icons/md";

let SearchLocation = ({ handleProfileIconClick }) => {
  return (
    <div className="search-location-container">
      <div className="icons-close-container">
        <div className="close">
          <MdCancel className="icons-close" size={30} onClick={handleProfileIconClick}/>
        </div>
      </div>
      <div className="search-location-modal">
      <form className="search-location-form">
          <div className="search-location-form-container">
            <input type="text" name="search-location" className="search-location" placeholder="Search Location"></input>
            <MdCancel className="icons-search" size={30} />
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