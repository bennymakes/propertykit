import React, { Component } from "react";
import "bootstrap";
import "../public/main.css";
import LoginArea from "./components/loginArea.js";
import Logo from "./img/white_logo_vec.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: "PropertyKit",
      biline: "Premium Property Management Software"
    };
  }

  handleClick(e) {
    console.log("Clicked a button");
    console.log(e.target);
  }

  handleMouseOver(e) {
    console.log("Moused Over");
    console.log(e.target);
  }

  copyMessage(e) {
    e.preventDefault();
    console.log("Sneaky Sneaky");
  }
  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center align-items-center mt-5">
          <Logo className="logo react-svg col-xs-8 col-md-6 col-sm-7 col-lg-10 pb-4" />
          <div className="mb-5">
            <h2>{this.state.biline}</h2>
          </div>
          <LoginArea />
        </div>
      </div>
    );
  }
}

export default App;
