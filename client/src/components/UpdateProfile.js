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
      bio: '',
      file: null
    }
    this.getUserProfile = this.getUserProfile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateCurrentUserProfile = this.updateCurrentUserProfile.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  getUserProfile() {
    let email = this.props.currentUser;
    axios.get(`/pave/profile/${email}`)
    .then(({ data }) => {
      this.setState({
        firstName: data.firstName,
        lastName: data.lastName,
        profile_picture: data.profile_picture,
        bio: data.bio
      }, () => console.log('fName lName profPic bio', this.state.firstName, this.state.lastName, this.state.profile_picture, this.state.bio))
    })
    .catch((err) => console.log('get user by email failed', err))
  }
  
  updateCurrentUserProfile(bio){
    let email = this.props.currentUser;
    axios.put(`/pave/profile/${email}`, {
      profile_picture: this.state.file,
      bio
    }, () => console.log('current profile pic and bio', this.state.file, this.state.bio))
    .then(() => {
      this.getUserProfile();
    })
    .then(() => {
      document.getElementById('bio-text').value = '';
    })
    .catch((err) => console.log('update Current User Profile failed', err))
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  handleSubmitForm(e){
    e.preventDefault();
    let newBio = document.getElementById('bio-text').value;
    console.log('newbio', newBio);
    console.log('waht is file bio', this.state.profile_picture, this.state.bio)
    this.updateCurrentUserProfile(newBio);
  }

  componentDidMount(){
    this.getUserProfile();
  }
  render() {
    let greeting;
    if (this.state.firstName.length !== 0){
      greeting = `Hello ${this.state.firstName[0].toUpperCase()}${this.state.firstName.slice(1)} ${this.state.lastName[0].toUpperCase()}${this.state.lastName.slice(1)}!`
    } else {
      greeting = '';
    }
    console.log('what is current user', this.props.currentUser)
    console.log('what is bio', this.state.bio)
    return (
      <div className="fullscreen-container">
        <div className="update-profile-modal">
          <form className="update-profile" onSubmit={this.handleSubmitForm}>
            <div><IoIosArrowBack className="gooBack" onClick={this.props.returnToHomepage} /></div>
            <div className="update-profile-container">
              <div className="greeting">
                {greeting}
              </div>
            </div>
            <div className="update-profile-container">
              <div>
                {this.state.file ? <img className="profile-picture" src={this.state.file}></img> : <img className="profile-picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>}
              </div>
              <label>Profile Picture:</label>
              <input type="file" onChange={this.handleChange} name="profile_picture" className="profile_picture"></input>
            </div>
            <div className="update-profile-container">
              <label>Current Bio:</label><br />
                <div className="update-text">{this.state.bio}</div>              
            </div>
            <div className="update-profile-container">
              <label>Enter Updated Bio:</label><br />
              <textarea type="text" name="bio" className="bio" id="bio-text"></textarea>
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