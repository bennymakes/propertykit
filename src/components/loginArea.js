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
      title: "Hi!",
      copyMessage:
        "Fill out your details below and hit Get Started to begin your application."
    };
  }

  clickLogin = (e) => {
    console.log("Lets get started");
  };

  clickMember = (e) => {
    e.preventDefault();
    console.log("User has applied before.");
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
            <h1> {this.state.title} </h1>
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

            <button className="btn btn-primary" onClick={this.clickLogin}>
              Get Started
            </button>
            <button className="btn btn-link  btn-sm" onClick={this.clickMember}>
              I have applied before
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginArea;
