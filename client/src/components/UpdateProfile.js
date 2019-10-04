import React, { Component } from 'react';
import axios from 'axios';

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
  getUserProfile(){
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
  componentDidMount(){
    // this.getUserProfile()
  }
  render() {
    return (
      <div className="fullscreen-container">
        <div className="update-profile-modal">
          <form className="update-profile">
            <div className="title">Update User Profile</div>
            <div className="update-profile-container">
              <input type="firstName" name="firstName" className="firstName" placeholder="First Name"></input>
            </div>
            <div className="update-profile-container">
              <input type="lastName" name="lastName" className="lastName" placeholder="Last Name"></input>
            </div>
            <div className="update-profile-container">
              <input type="profile_picture" name="profile_picture" className="profile_picture" placeholder="Profile Picture"></input>
            </div>
            <div className="update-profile-container">
              <input type="bio" name="bio" className="bio" placeholder="Bio"></input>
            </div>
            <div>
              <button className="updaing-profile"><span className="prof-txt">Update Profile</span></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}