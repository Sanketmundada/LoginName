import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import firebase from "./firebase";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    //PROCESS FORM //
    //This will be the place where u will send the Data to the backend/ API
    this.props.nextStep();
    const itemsRef = firebase.database().ref("items");

    const item = {
      firstName: this.props.values.firstName,
      lastName: this.props.values.lastName,
      mail: this.props.values.email,
      occupation: this.props.values.occupation,
      city: this.props.values.city,
      bio: this.props.values.bio
    };

    itemsRef.push(item);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Details" />
          <List>
            <ListItem primaryText="FirstName" secondaryText={firstName} />
            <ListItem primaryText="LastName" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default Confirm;
