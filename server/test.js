// not sure if I need this yet


// const axios = require('axios');

// axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
//         //required authorization format from API 
//         headers: {
//             //to get the API from the .env file use process.env.{variable name}
//             Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
//         },
//         //option params passed to API call to retrieve only breakfast and lunch spots 
//         params: {
//             categories: 'breakfast_brunch',
//         }
//         // })
//         // .then((res) => {
//         //     console.log(res.data.businesses)
//         //     //change the state of App to reflect on the result we are given from the API
//         //     //at the same time, setting the loading state to false 
//         //     // this.setState({ results: res.data.businesses, loading: false })
//         // })
//         // .catch((err) => {
//         //     //fire the errorState message if there is no information return from the API
//         //     // this.setState({ errorState: `Sorry we coudln't find information related to the location you search, do you want to try something else?`, loading: false })
//         // })
//     })

// module.exports = axios.get
