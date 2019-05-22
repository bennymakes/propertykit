import React, { Component } from "react";
import "bootstrap";
import "../../dist/main.css";

class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      givenName: null,
      familyName: null,
      title: "Start a New Application",
      copyMessage:
        "To apply for a new property please fill out the below form start to finish."
    };
  }

  clickLogin = (e) => {
    console.log("Clicked the login button");
  };

  clickReset = (e) => {
    console.log("Clicked reset password button");
  };

  clickMember = (e) => {
    e.preventDefault();
    console.log("Clicked I am a user button");
  };

  stateUser = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div className="loginAreaWrapper container">
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-10">
            <h2> {this.state.title} </h2>
            <p> {this.state.copyMessage}</p>
            <div className="input-group my-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Name</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Given Name"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Family Name"
              />
            </div>

            <div className="input-group my-2 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Details</span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>

            <button
              className="btn btn-primary btn-sm"
              onClick={this.clickLogin}
            >
              Login
            </button>
            <button className="btn btn-link  btn-sm" onClick={this.clickMember}>
              Already a User
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginArea;
