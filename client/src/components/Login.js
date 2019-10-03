import React, { Component } from 'react';
import { GoMail } from "react-icons/go";
import { IoIosLock } from "react-icons/io";
import axios from 'axios';
import Facebook from './Facebook.js'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      pwError: false,
      emailError: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value }, () => console.log('EMAIL:', this.state.email))
  }

  getAll(event) {
    event.preventDefault();
    axios
      .get('/pave/user')
      .then((response) => {
        let emailMatch = false;
        for (var i = 0; i < response.data.length; i++) {
          if (response.data[i].email === this.state.email) {
            //email is correct
            emailMatch = true;
            if (response.data[i].password !== this.state.password) {
              this.setState({ pwError: true })
            } else {
              //if the pass matches then login
              this.props.changeCurrentUser(this.state.email)
              this.props.returnToHomepage()
            }
          }
        }
        if (emailMatch === false) {
          this.setState({ emailError: true })
        }
      })
      .catch((error) => console.log(error))
  }


  render() {

    return (
      <div>
        <div className="fullscreen-container">

          <div className="login-modal">
            <div>
            </div>
            <form className="login" onSubmit={this.getAll}>
              {this.state.emailError && <div className="err">
                <div className="errors">
                  <span></span>
                  <span>There isn't an account associated with this email address. Please try another email or sign up!</span>
                </div>
              </div>}
              {this.state.pwError && <div className="err">
                <div className="errors">
                  <span></span>
                  <span>The password you entered is incorrect. Please, try again.</span>
                </div>
              </div>}

              {/* REROUTE TO HOMEPAGE IF LOGIN IN IS CORRECT
              REROUTE TO SIGN UP PAGE ON CLICK */}
              
                <Facebook className="fb" changeCurrentUser={this.props.changeCurrentUser} returnToHomepage={this.props.returnToHomepage} />

                <div className="borderer">
                  <span className="border-before"></span>
                  <span className="or">or</span>
                  <span className="border-after"></span>
                </div>
                <div className="login-container">
                  <input type="email" name="email" className="email" placeholder="Email Address" required onChange={this.handleChange}></input>
                  <GoMail className="icons" size={30} />
                </div>
                <div className="login-container">
                  <input type="password" name="password" className="password" placeholder="Password" required onChange={this.handleChange}></input>
                  <IoIosLock className="icons" size={30} />
                </div>
                <div className="remember">
                  <input type="checkbox"></input>
                  <span className="reme">Remember Me</span>
                </div>
                <div>
                  <button className="logging"><span className="log-txt">Log in</span></button>
                </div>
                <div className="forgot">Forgot your password?</div>
                <div className="border"></div>
                <div className="new-acc">
                  <span>Don't have an account?</span>
                  <span className="createAccount" onClick={this.props.clickHandler} >Sign Up</span>
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
.password {
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
      
.login-container {
          padding - bottom: 10px;
      }
      
.login-modal {
          padding: 20px;
        position: relative;
        left: 15px;
      }
      
.logging {
          width: 290px;
        height: 40px;
        font-size: 22px;
        border-radius: 10px;
        padding: 11px;
        background: transparent;
      }
      
.reme {
          position: relative;
        bottom: 2px;
      }
      
.log-txt {
          position: relative;
        bottom: 7px;
      }
      
.border {
          border - bottom: 1px solid lightgrey;
        padding: 10px;
        width: 284px;
      }
      
      .new-acc,
.forgot {
          position: relative;
        top: 10px;
      }
      
.remember {
          position: relative;
        bottom: 5px;
      }
      
.create {
          position: relative;
        left: 100px;
      }
      
.err {
          padding: 10px;
      }
      
.errors {
          border: 1px solid lightgrey;
        padding: 20px;
        position: relative;
        right: 15px;
      }
      
*/