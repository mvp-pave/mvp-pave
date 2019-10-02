import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      XMoused: false,

    }
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);

  }

  mouseOut() {
    this.setState({ XMoused: false });
  }

  mouseOver() {
    this.setState({ XMoused: true });
  }

  render() {
    if (this.props.loginClicked) {
      return (
        <div>
          <div className="fullscreen-container">

            <div className="login-modal">
              <div>
                {this.state.XMoused ? <img src={'./images/XHover.png'} onClick={this.props.handleXClick} onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} className="X"></img> : <img className="X" src={'./images/X.png'} onClick={this.props.handleXClick} onMouseOut={this.mouseOut} onMouseOver={this.mouseOver} ></img>}
                <p className="sign-in"> Sign In</p>
              </div>
              <form className="login" action="/action_page.php">
                <div className="login-container">

                  <label className="login-input-label" >EMAIL*</label>
                  <input type="email" name="uname" className="login-input-box" required></input>
                </div>
                <div className="login-container">

                  <label className="login-input-label" >PASSWORD*</label>
                  <input type="password" className="login-input-label" className="login-input-box" required></input>
                </div>
                <div className="psw">Forgot your password?</div>
                <div id="sumbit-container">
                  <span>
                    <button type="submit" id="submit">SIGN IN</button>
                    <p id="cancel">Cancel</p>
                  </span>
                </div>
              </form>
              <div className="sign-up-border"></div>
              <p className="sign-up">Sign Up</p>
              <button id="create-account">CREATE AN ACCOUNT</button>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}