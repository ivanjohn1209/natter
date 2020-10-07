import React, { Component } from "react";
const CreateNewUserContext = React.createContext();
export default class CreateUserContext extends React.Component {
  state = {
    Firstname: "",
    LastName: "",
    Password: "",
    Gender: "",

    Date: new Date(),
  };

  setFirstName = (Firstname) => {
    this.setState({ Firstname });
  };
  setLastName = (LastName) => {
    this.setState({ LastName });
  };
  setDate = (Date) => {
    this.setState({ Date });
  };
  setPassword = (Password) => {
    this.setState({ Password });
  };
  setGender = (Gender) => {
    this.setState({ Gender });
  };
  render() {
    return (
      <CreateNewUserContext.Provider
        value={{
          //state
          Firstname: this.state.Firstname,
          LastName: this.state.LastName,
          Date: this.state.Date,
          Password: this.state.Password,
          Gender: this.state.Gender,

          //function
          setFirstName: this.setFirstName,
          setLastName: this.setLastName,
          setDate: this.setDate,
          setPassword: this.setPassword,
          setGender: this.setGender,
        }}
      >
        {this.props.children}
      </CreateNewUserContext.Provider>
    );
  }
}
export { CreateUserContext, CreateNewUserContext };
