import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../../../public/main.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Logo from "../../img/purple_logo_vec.svg";
import Button from "@material-ui/core/Button";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Approw">
        <Paper className="flex-item login" elevation={5} square={true}>
          <div className="top">
            <div className="logoContainer">
              <Logo className="logo" />
            </div>
            <div className="biline">{this.props.biline}</div>
          </div>
          <div className="middle">
            <div>
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="Email or Phone"
                autoFocus={true}
              />
            </div>
            <div>
              <TextField
                required
                variant="outlined"
                margin="dense"
                label="Password"
              />
            </div>
          </div>
          <div className="bottom">
            <Button className="buttonPad" variant="outlined">
              {this.props.loginButton}
            </Button>
            <Button className="buttonPad">{this.props.register}</Button>
            <div>
              <Button className="registerButton">{this.props.forgot}</Button>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let loginUI = state.ui.login;
  return {
    title: loginUI.title,
    loginButton: loginUI.loginButton,
    biline: loginUI.biline,
    forgot: loginUI.forgot,
    register: loginUI.register
  };
}

export default connect(mapStateToProps)(Login);
