import React, { Component } from 'react';
import { GoMail } from "react-icons/go";
import { IoIosLock, IoIosArrowBack } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.newUser = this.newUser.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    axios
      .get('/pave/user')
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value })
  }

  newUser() {
    axios
      .post('/pave/user', {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  render() {
    return (
      <div>
        <div className="fullscreen-container">
          <div className="signup-modal">
            <div><IoIosArrowBack className="goBack" onClick={this.props.returnToHomepage} /></div>
            <form className="signup" onSubmit={this.newUser}>
              <div className="signup-container">
                <input type="email" name="email" className="email" placeholder="Email Address" required onChange={this.handleChange}></input>
                <GoMail className="icons" size={30} />
              </div>
              <div className="signup-container">
                <input type="text" name="firstName" className="first" placeholder="First Name" required onChange={this.handleChange}></input>
                <MdPersonOutline className="icons" size={30} />
              </div>
              <div className="signup-container">
                <input type="text" name="lastName" className="last" placeholder="LastName" required onChange={this.handleChange}></input>
                <MdPersonOutline className="icons" size={30} />
              </div>
              <div className="signup-container">
                <input type="password" name="password" className="password" placeholder="Password" required onChange={this.handleChange}></input>
                <IoIosLock className="icons" size={30} />
              </div>
              <div>
                <p>By clicking Sign up or Continue with, I agree to Pavé's <u>Terms of Service</u>, <u>Payments Term of Service</u>, <u>Privacy Policy</u>, and <u>Nondiscrimination Policy</u></p>
                <button className="signing"><span className="sup-txt">Sign Up</span></button>
              </div>
            </form>
          </div>
        </div>
      </div >
    )
  }
}

/*
.fullscreen-container {
	position: relative;
	top: 20px;
}

.email,
.password,
.first,
.last {
	width: 265px;
	height: 40px;
	border: 1px solid lightgrey;
	font-size: 22px;
	border-radius: 10px;
	padding: 11px;
}

.icons {
	position: relative;
	right: 45px;
	top: 8px;
}

.signup-container {
	padding-bottom: 10px;
}

.signup-modal {
	padding: 20px;
	position: relative;
	left: 15px;
}

.signing {
	width: 290px;
	height: 40px;
	font-size: 22px;
	border-radius: 10px;
	padding: 11px;
	background: transparent;
}


.sup-txt {
	position: relative;
	bottom: 7px;
}

.border {
	border-bottom: 1px solid lightgrey;
	padding: 10px;
	width: 284px;
}
*/