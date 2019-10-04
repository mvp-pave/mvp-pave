import React, { Component } from 'react';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      profile_picture: '',
      bio: ''
    }
    this.getUserProfile = this.getUserProfile.bind(this);
  }
  getUserProfile() {
    // axios.get('/pave/user/:email')
    // .then(({ data }) => {
    //   this.setState({
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     profile_picture: data.profile_picture,
    //     bio: data.bio
    //   }, () => console.log('fName lName profPic bio', this.state.firstName, this.state.lastName, this.state.profile_picture, this.state.bio))
    // })
    // .catch((err) => console.log('get user by email failed', err))
  }
  componentDidMount() {
    // this.getUserProfile()
  }
  render() {
    return (
      <div className="fullscreen-container">
        <div className="update-profile-modal">
          <form className="update-profile">
            <div><IoIosArrowBack className="goBack" onClick={this.props.returnToHomepage} /></div>
            <h2>Update User Profile</h2>
            <div className="update-profile-container">
              <label>First Name:</label>
              <input type="text" name="firstName" className="firstName"></input>
            </div>
            <div className="update-profile-container">
              <label>Last Name:</label>
              <input type="text" name="lastName" className="lastName"></input>
            </div>
            <div className="update-profile-container">
              <label>Profile Picture:</label>
              <input type="file" name="profile_picture" className="profile_picture"></input>
            </div>
            <div className="update-profile-container">
              <label>Bio:</label><br />
              <input type="text" name="bio" className="bio" ></input>
            </div>
            <div>
              <button className="updating-profile"><span className="prof-txt">Update Profile</span></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}