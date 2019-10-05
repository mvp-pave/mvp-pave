import React, { Component } from 'react';
import ListItem from './ListItem.js'
import Restaurant from './Restaurant.js';
import REACT_APP_YELP_API_KEY from '../../../config.js';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getId: "",
      info: "",
      clickedHeart: false,
    }
    this.getIdHandleClick = this.getIdHandleClick.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
    this.likeHandleClick = this.likeHandleClick.bind(this);
  }

  getIdHandleClick(e, id) {
    e.preventDefault();
    // console.log("you clicked the button", id)
    this.setState({
      getId: id,
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
      clickedHeart : !this.state.clickedHeart
    })
  }

  render() {
    if (this.props.results.length > 0) {
      return (
        <div className="listContainer">
          <h2 className="list-title">Places to eat around the world</h2>
          <div className="listStores">
            {this.props.results.map((storeInfo, index) => (
              <ListItem storeInfo={storeInfo} key={index} id={storeInfo.id} getIdHandleClick={this.getIdHandleClick} />
            ))}
          </div>
          <div className="listMainStore">
            <Restaurant info={this.state.info} clickedHeart={this.state.clickedHeart} likeHandleClick={this.likeHandleClick}/>
          </div>
          {/* <button onClick={this.handleClickModal}>Show More</button> */}
        </div>
      )
    } else {
      return (
        <div>
        </div>
      )
    }
  }
}

export default List;