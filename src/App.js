import React, { Component } from "react";
import "../public/main.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title: "PropertyKit",
      biline: "Property Management Software"
    };
  }

  componentDidMount() {
    console.log(store.getState());
  }

  render() {
    return <div className="App container">{this.props.display}</div>;
  }
}

function mapStateToProps(state) {
  return {
    display: state.ui.display
  };
}

export default connect(mapStateToProps)(App);
