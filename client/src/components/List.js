import axios from 'axios';
import React, { Component } from 'react';
import REACT_APP_YELP_API_KEY from '../../../config.js'
import ListItem from './ListItem.js'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      info:[]
    }
    this.getRestaurants = this.getRestaurants.bind(this)
    // this.getStore = this.getStore.bind(this)

  }
  componentDidMount() {
    this.getRestaurants("los angeles");
    // this.getStore("TkFEKhsCixPWlShULKvMdQ")
  }

  getRestaurants(location) {
    let key = REACT_APP_YELP_API_KEY()
    this.setState({ loading: true }) 
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}`, {
          //required authorization format from API 
          headers: {
              Authorization: key
          },
          params: {
              categories: `restaurant`,
              limit: 8
          }
          })
          .then((res) => {
              console.log(res.data.businesses)
              this.setState({ results: res.data.businesses })
          })
          .catch((err) => {
              console.log('fix the broke', err)
          })
  }


  // getStore(id) {
  //   let key = REACT_APP_YELP_API_KEY()
  //   this.setState({ loading: true }) 
  //   axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}`, {
  //         headers: {
  //             Authorization: key
  //         },
  //         // params: {
  //         //     categories: `restaurant`,
  //         //     limit: 5
  //         // }
  //         })
  //         .then((res) => {
  //             console.log(res.data)
  //             console.log(res.data.rating)
  //             // this.setState({ info: res.data, loading: false })
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //             // this.setState({ errorState: `Sorry we couldn't find information related to the location you search, do you want to try something else?`, loading: false })
  //         })
  // }
  
  render() {
    if (this.state.results.length) {
      return (
        <div>
          <div>
            <h2>Places to eat around the world</h2>
          </div> 
          <div>
            {this.state.results.map((storeInfo, index ) => (
              <ListItem storeInfo={storeInfo} key={index} id={storeInfo.id}/>
            ))}
          </div>
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