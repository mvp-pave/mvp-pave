import React, { Component } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults.js';
import REACT_APP_YELP_API_KEY from '../../../yelpconfig.js'
import { IoIosSearch, IoIosArrowBack } from "react-icons/io";

const suggestions = ["cajun", "chinese", "cantonese", "cuban", "coffee", "cambodian"];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      location: '',
      moused: false,
      results: [],
      suggestionOptions: [],
      loading: false,
      queryClickCount: 0,
      locationClickCount: 0,
    }
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.destinationClick = this.destinationClick.bind(this);
    this.suggestionClick = this.suggestionClick.bind(this);
    this.suggestionChange = this.suggestionChange.bind(this);
    this.getResults = this.getResults.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  clearFields() {
    this.setState({ query: "", location: "" });
  }

  handleQueryChange(event) {
    this.setState({ query: event.target.value }, () => this.suggestionChange());
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  suggestionClick(query) {
    let count = this.state.queryClickCount;
    count++;
    if (count => 1 && this.state.locationClickCount >= 1) {
      this.setState({ queryClickCount: 0, locationClickCount: 0 });
      this.setState({ query }, () => this.getResults());
    } else {
      this.setState({ queryClickCount: count });
      this.setState({ query });
    }
  }

  destinationClick(location) {
    let count = this.state.locationClickCount;
    count++;
    if (count => 1 && this.state.queryClickCount >= 1) {
      this.setState({ locationClickCount: 0, queryClickCount: 0 });
      this.setState({ location }, () => this.getResults());
    } else {
      this.setState({ locationClickCount: count });
      this.setState({ location });
    }
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
      <div className="allSearch" id="full-topbar">
        <div className="search-container" >
          <div className="search-wrapper">
            <form onSubmit={this.getResults}>
              <div className="search-container">
                {/* <label className="search-labels">Find:</label> */}
                <span className="search-goBack" ><IoIosArrowBack size={20} onClick={this.props.returnToHomepage} /></span>

                <input tabIndex="1" name="query" id="query" value={this.state.query} ref={this.setWrapperRef} onChange={this.handleQueryChange} type="text" placeholder="Greek, Chinese, Thai, Italian..." className="search-loc" ></input>
              </div>
              <div className="search-container">
                {/* <label className="search-labels">Near:</label> */}
                <input tabIndex="1" name="location" value={this.state.location} ref={this.setWrapperRef} onChange={this.handleLocationChange} type="text" placeholder="Enter a Location" className="search-loc" ></input>
                <span id="search-button" ><IoIosSearch size={30} onClick={this.getResults} /></span>
              </div>
              <button type="submit" id="hidden-search-button"></button>
            </form>
            {/* <span className="homepage" onClick={this.props.clickHandler} >Cancel</span> */}
            <span onClick={this.clearFields} id="clear">Clear</span>
          </div>

          <SearchResults destinationClick={this.destinationClick} suggestionClick={this.suggestionClick} query={this.state.query} location={this.state.location} results={this.state.results} suggestionOptions={this.state.suggestionOptions} trending={this.state.trending} />
        </div>
      </div>

    )
  }
}
