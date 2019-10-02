import axios from 'axios';
import React, { Component } from 'react';
import REACT_APP_YELP_API_KEY from '../../../config.js'
console.log(REACT_APP_YELP_API_KEY())

class FakeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      loading: false
    }
    this.getRestaurants = this.getRestaurants.bind()
  } 
  componentDidMount() {
    this.getRestaurants("los angeles")
  }
 
  getRestaurants(location) {
    let key = REACT_APP_YELP_API_KEY()
    // this.setState({ loading: true }) 
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
          //required authorization format from API 
          
          headers: {
              //to get the API from the .env file use process.env.{variable name}
              Authorization: key
              
              // Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
              // Authorization: `Bearer lmBnwwniaabQZhlU4EZCMRVPIGp7W8apNMNFzKrTTuKx2peqhcU0pI9wRLENTUm6eU0lxN46cfDLwLSmnBIPVrUVfahFmUQT4X34QUYSmP4ghYIA3_bf_sYkU9KTXXYx`
          },
          //option params passed to API call to retrieve only breakfast and lunch spots 
          params: {
              // categories: `${terms}`,
              categories: `restaurants`,
          }
          })
          .then((res) => {
              console.log(res.data.businesses)
              //change the state of App to reflect on the result we are given from the API
              //at the same time, setting the loading state to false 
              // this.setState({ results: res.data.businesses, loading: false })
          })
          .catch((err) => {
              //fire the errorState message if there is no information return from the API
              console.log(err)
              // this.setState({ errorState: `Sorry we couldn't find information related to the location you search, do you want to try something else?`, loading: false })
          })
  }
  render() {
    return (
      <div>
        

      </div>
    )
  }
}

export default FakeApp;