import React, { Component } from "react";
import "bootstrap";
import "../public/main.css";
import LoginArea from "./components/loginArea.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: "PropertyKit"
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
      <div className="App">
        <div className="container-fluid">
          <h1 onCopy={this.copyMessage}> {this.state.title} </h1>
          <LoginArea />
        </div>
      </div>
    );
  }
}

export default App;
