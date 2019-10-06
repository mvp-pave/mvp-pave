import React, { Component } from 'react';
import REACT_APP_YELP_API_KEY from '../../../yelpconfig.js';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";

class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getId: "",
      info: "",
      clickedHeart: false,
      clickedRestaurant: false,

    }
    this.getIdHandleClick = this.getIdHandleClick.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
    this.likeHandleClick = this.likeHandleClick.bind(this);
    this.closeModalClick = this.closeModalClick.bind(this);
  }

  getIdHandleClick(e, id) {
    e.preventDefault();
    // console.log("you clicked the button", id)
    this.setState({
      getId: id,
      clickedRestaurant: true
    }, () => this.getRestaurant(id))
  }


  getRestaurant(id) {
    let key = REACT_APP_YELP_API_KEY()
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: key
      },
    })
      .then((res) => {
        this.setState({
          info: res.data,
        })
        // console.log("getRestaurant works", res.data)
      })
      .catch((err) => {
        console.log("getRestaurant broke", err)
      })
  }

  likeHandleClick(e) {
    this.setState({
      clickedHeart: !this.state.clickedHeart
    })
  }

  closeModalClick(e) {
    this.setState({
      clickedRestaurant: false
    })
  }

  render() {
    return (
      <div > hii
                    <div><IoIosArrowBack className="gooBack" onClick={this.props.returnToHomepage} /></div>

      </div>
    )
  }
}

export default Recommendations;