import React, { Component } from 'react';
import ResultItem from './ResultItem.js';
import ResultRestaurant from './ResultRestaurant.js';
import REACT_APP_YELP_API_KEY from '../../../yelpconfig.js';
import axios from 'axios';
export default class SearchResults extends Component {
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
    let { suggestionOptions, results, query, location, suggestionClick, destinationClick } = this.props
    if (query.length === 0) {
      return (
        <div className="suggestions-box">
          <div className="trending full-topbar">
            <div className="trendings">
              <span className="trend" onClick={() => suggestionClick("japanese")} >Japanese</span>
              <span className="trend" onClick={() => suggestionClick("mexican")} >Mexican</span>
              <span className="trend" onClick={() => suggestionClick("korean")}  >Korean</span>
            </div>
            <div className="trendings">
              <span className="trend" onClick={() => suggestionClick("mediterranean")} >Mediterranean</span>
              <span className="trend" onClick={() => suggestionClick("chinese")} >Chinese</span>
            </div>
          </div>
          <h3 className="popular-h">Popular Destinations</h3>
          <div className="all-imgs">
            <div className="img-container">
              <img className="img-sugg" src={'./images/NYCSquare.jpeg'} onClick={() => destinationClick("New York, NY")}  ></img>
              <div className="title-container">
                <div className="sugg-title">New York, NY</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/FranceSquare.jpeg'} onClick={() => destinationClick("Paris, France")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Paris, France</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/TokyoSquare.jpeg'} onClick={() => destinationClick("Tokyo, Japan")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Tokyo, Japan</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/RomeSquare.jpeg'} onClick={() => destinationClick("Rome, Italy")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Rome, Italy</div>
              </div>
            </div>
            {/* <div className="popular" onClick={() => destinationClick("New York, NY")}  ><img className="result-img" src={'./images/NYCSquare.jpeg'}></img>
              <div className="pop-title"></div></div>
            <div className="popular" onClick={() => destinationClick("Paris, France")} ><img className="result-img" src={'./images/FranceSquare.jpeg'}></img>
              <div className="pop-title">Paris, France</div></div>
            <div className="popular" onClick={() => destinationClick("Tokyo, Japan")} ><img className="result-img" src={'./images/TokyoSquare.jpeg'}></img>
              <div className="pop-title">Tokyo, Japan</div></div>
            <div className="popular" onClick={() => destinationClick("Rome, Italy")} ><img className="result-img" src={'./images/RomeSquare.jpeg'}></img>
              <div className="pop-title">Rome, Italy</div></div> */}
          </div>
        </div >
      )
    }
    else if (query.length > 0 && results.length === 0) {
      return (
        <div className="suggestions-box-searched">
          <div id="results-container full-topbar">
            {suggestionOptions.map(suggest => (
              <span className="trend" onClick={() => suggestionClick(suggest)}>{suggest}</span>
            ))}
          </div>
          <h3 className="popular-h">Popular Destinations</h3>
          <div className="all-imgs">
            <div className="img-container">
              <img className="img-sugg" src={'./images/NYCSquare.jpeg'} onClick={() => destinationClick("New York, NY")}  ></img>
              <div className="title-container">
                <div className="sugg-title">New York, NY</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/FranceSquare.jpeg'} onClick={() => destinationClick("Paris, France")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Paris, France</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/TokyoSquare.jpeg'} onClick={() => destinationClick("Tokyo, Japan")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Tokyo, Japan</div>
              </div>
            </div>
            <div className="img-container">
              <img className="img-sugg" src={'./images/RomeSquare.jpeg'} onClick={() => destinationClick("Rome, Italy")}  ></img>
              <div className="title-container">
                <div className="sugg-title">Rome, Italy</div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (results.length > 0) {
      return (
        <div className="listContainer" id="search-results">
          <h2 className="list-title">Explore {location}</h2>
          <div className="listStores">
            {results.map((storeInfo, index) => (
              <ResultItem className="each-list-item" storeInfo={storeInfo} key={index} id={storeInfo.id} getIdHandleClick={this.getIdHandleClick} />
            ))}
          </div>
          <div className="listMainStore" >
            {this.state.clickedRestaurant ? <ResultRestaurant info={this.state.info} clickedHeart={this.state.clickedHeart}
              likeHandleClick={this.likeHandleClick} closeModalClick={this.closeModalClick} className="restaurantMain" /> : <div className="restaurantNone"></div>}
          </div>
          {/* <button onClick={this.handleClickModal}>Show More</button> */}
        </div>
      )
    } else {
      return null;
    }
  }
}
