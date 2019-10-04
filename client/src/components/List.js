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
      clickedPic: false,
    }
    this.getIdHandleClick = this.getIdHandleClick.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  getIdHandleClick(e, id){
    e.preventDefault();
    console.log("you clicked the button", id)
    this.setState({
      getId: id,
      clickedPic: true
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
          clickedPic: false
        })
        console.log("getRestaurant works", res.data)
      })
      .catch((err) => {
        console.log("getRestaurant broke",err)
      })
  }



  render() {
    if (this.props.results.length > 0) {
      return (
        <div className="listContainer">
          <div className="listTitle">
            <h2>Places to eat around the world</h2>
          </div>
          <div className="listStores">
            {this.props.results.map((storeInfo, index) => (
              <ListItem storeInfo={storeInfo} key={index} id={storeInfo.id} getIdHandleClick={this.getIdHandleClick}/>
            ))}
          </div>
          <div className="listMainStore">
            <Restaurant info={this.state.info}/> 
          </div>
          <button onClick={this.handleClickModal}>Show More</button>
        </div>
      )
    } else {
      return (
        <div>
          loading ... please wait ...
        </div>
      )
    }
  }
}

export default List;