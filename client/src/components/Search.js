import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.js';
import REACT_APP_YELP_API_KEY from '../../../config.js'


const suggestions = ["mexican", "thai", "chinese", "taiwanese", "italian", "cambodian", "moroccan", "soul food", "indian", "vietnamese", "american", "cajun", "french", "japanese", "spanish", "greek", "mediterranean", "korean", "seafood", "vegan", "vegetarian", "tapas", "cuban"];
const trends = ["Tokyo, Japan", "Paris, France", "Los Angeles, CA", "New York, NY", "Rome, Italy"];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      location: '',
      moused: false,
      results: [],
      suggestionOptions: [],
      trending: [],
      loading: false
    }
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.handleClickInside = this.handleClickInside.bind(this);
    // this.mouseOut = this.mouseOut.bind(this);
    // this.mouseOver = this.mouseOver.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.destinationClick = this.destinationClick.bind(this);
    this.suggestionClick = this.suggestionClick.bind(this);
    this.suggestionChange = this.suggestionChange.bind(this);
    this.getTrending = this.getTrending.bind(this);
    this.getResults = this.getResults.bind(this);
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value }, () => this.suggestionChange());
  }
  handleLocationChange(event) {
    this.setState({ location: event.target.value }, () => this.getTrending());
  }

  suggestionClick() {
    this.setState({ query: event.target.name });
  }

  destinationClick() {
    this.setState({ location: event.target.name });
  }

  suggestionChange() {
    let arr = [];
    for (var i = 0; i < suggestions.length; i++) {
      if (suggestions[i].includes(this.state.query)) {
        arr.push(suggestions[i])
      }
    }
    arr = arr.slice(0, 5)
    this.setState({ suggestionOptions: arr })
  }

  getTrending() {
    let arr = [];
    let loc = this.state.location.toLowerCase;
    for (var i = 0; i < trends.length; i++) {
      if (trends[i].toLowerCase().includes(loc)) {
        arr.push(trends[i])
      }
    }
    arr = arr.slice(0, 5)
    this.setState({ trending: arr }, () => console.log("trending", this.state))
  }

  getResults() {
    let key = REACT_APP_YELP_API_KEY()
    // this.setState({ loading: true }) 
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.location}`, {
      //required authorization format from API 

      headers: {
        //to get the API from the .env file use process.env.{variable name}
        Authorization: key

        // Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      },
      //option params passed to API call to retrieve only breakfast and lunch spots 
      params: {
        // categories: `${terms}`,
        categories: this.state.query,
      }
    })
      .then((res) => {
        console.log(res.data.businesses)
        //change the state of App to reflect on the result we are given from the API
        //at the same time, setting the loading state to false 
        this.setState({ results: res.data.businesses, loading: false })
      })
      .catch((err) => {
        //fire the errorState message if there is no information return from the API
        console.log(err)
        // this.setState({ errorState: `Sorry we couldn't find information related to the location you search, do you want to try something else?`, loading: false })
      })
  }

  render() {
    return (
      <div className="allSearch">
        <div className="search-container" >
          <div className="search-wrapper">
            <form action="/action_page.php" onSubmit={this.getResults}>
              <div className="search-container">
                <label className="search-labels">Find:</label>
                <input tabIndex="1" name="query" value={this.state.query} ref={this.setWrapperRef} onChange={this.handleQueryChange} type="text" placeholder="Mediterranean, Greek, Chinese, Thai, Italian..." className="search-loc" ></input>
              </div>
              <div className="search-container">
                <label className="search-labels">Near:</label>
                <input tabIndex="1" name="location" value={this.state.location} ref={this.setWrapperRef} onChange={this.handleLocationChange} type="text" placeholder="Enter a Location" className="search-loc" ></input>
              </div>
            </form>
            <div className="homepage" onClick={this.props.clickHandler} >Cancel</div>
          </div>

          <SearchResults destinationClick={this.destinationClick} suggestionClick={this.suggestionClick} query={this.state.query} location={this.state.location} results={this.state.results} suggestionOptions={this.state.suggestionOptions} trending={this.state.trending} />
        </div>
      </div>
    )
  }
}