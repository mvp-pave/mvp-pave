import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';

export default class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      firstName: '',
      lastName: '',
      email: '',
      picture: ''
    }
    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.postUser = this.postUser.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
    let newName = response.name.split(' ');
    this.setState({
      isLoggedIn: true,
      picture: response.picture.data.url,
      firstName: newName[0],
      lastName: newName[1],
      email: response.email
    }, () => this.getUsers())
  }

  getUsers() {
    axios
      .get('/pave/user')
      .then((response) => {
        let emailMatch = false;
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].email === this.state.email) {
            // if email match
            emailMatch = true;
            this.props.changeCurrentUser(this.state.email)
            this.props.returnToHomepage()
          }
        }
        if (emailMatch === false) {
          // if email doesn't exist in db, add user to db
          this.postUsers()
        }
      })
      .catch((error) => console.log(error))
  }

  postUser() {
    axios
      .post('/pave/user', {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        picture: this.state.picture
      })
      .then((response) => {
        this.props.changeCurrentUser(this.state.email)
        this.props.returnToHomepage()
      })
      .catch((error) => console.log(error))
  }

  componentClicked() {
    console.log('CLICKED')
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      this.props.returnToHomepage();
    } else {
      fbContent = (<FacebookLogin
        appId="659215294487087"
        // autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);

    }
    return (
      <div >{fbContent}</div>
    )
  }
}