import React, { Component } from 'react';
import { MdCancel } from "react-icons/md";
import Axios from 'axios';
import gmapKey from '../../../gmapconfig.js'
import { TiLocationArrowOutline } from "react-icons/ti";

export default class SearchLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.getCityName = this.getCityName.bind(this);
    this.submitSearchLocation = this.submitSearchLocation.bind(this);
  }
  getCurrentLocation(e) {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition)
    }
  }
  showPosition(position) {
    console.log('Lat, Long', position.coords.latitude, position.coords.longitude)
    this.getCityName(position.coords.latitude, position.coords.longitude)
  }
  getCityName(latitude, longitude) {
    Axios
      .get(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=${gmapKey}`)
      .then(({ data }) => this.props.changeHomeLocation(data.results[0].address_components[3].long_name))
      .then(() => this.props.handleProfileIconClick())
      .catch((err) => console.log('axios get to gmaps failed', err))
  }
  submitSearchLocation() {
    e.preventDefault();
    console.log('value of input', e.target.value)
    this.props.handleProfileIconClick();
    this.props.changeHomeLocation(e.target.value)
  }
  render() {
    let { handleProfileIconClick } = this.props;
    return (
      <div className="search-location-container">
        <div className="icons-close-container">
          <div className="close">
            <img src={'./images/X.png'} id="X" onClick={handleProfileIconClick} ></img>
          </div>
        </div>
        <div className="search-location-modal">
          <form className="search-location-form">
            <div className="search-location-form-container">
              <input type="text" name="search-location" className="search-location" placeholder="Search Location" onSubmit={this.submitSearchLocation}></input>
              <TiLocationArrowOutline className="location-icon" size={35} color={"#ccc"} />
            </div>
            <div>
              <button className="searching-location" onClick={(e) => { this.getCurrentLocation(e) }}><span className="loc-txt">Use Current Location</span></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}