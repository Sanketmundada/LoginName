import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
export class Userform extends Component {
  state = {
    step: 1,
    firstName: " ",
    lastName: " ",
    email: " ",
    occupation: " ",
    city: " ",
    bio: " "
  };

  // Proceed to the next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: this.state.step + 1
    });
  };

  //Go back to previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: this.state.step - 1
    });
  };

  //Handle field Change

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success firstName={firstName} />;
    }
  }
}

export default Userform;
