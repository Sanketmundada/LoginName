import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" />
          <h1>Thanks {this.props.firstName} For Your Submission</h1>
          <p>You will get an email with further Instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
