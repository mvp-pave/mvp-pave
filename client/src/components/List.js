import React, { Component } from 'react';
import ListItem from './ListItem.js'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClickModal = this.handleClickModal.bind(this)
  }

  handleClickModal(e){
    e.preventDefault();
    console.log("you clicked the button")
  }

  render() {
    if (this.props.results.length > 0) {
      return (
        <div>
          <div>
            <h2>Places to eat around the world</h2>
          </div>
          <div>
            {this.props.results.map((storeInfo, index) => (
              <ListItem storeInfo={storeInfo} key={index} id={storeInfo.id} />
            ))}
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