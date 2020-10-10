import React, { Component } from "react";
const CreateNewUserContext = React.createContext();
export default class CreateUserContext extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    password: "",
    mobile_number: "",
    email: "",
    date: "",
    gender: "",
  };

  setfirst_name = (first_name) => {
    this.setState({ first_name });
  };
  setlast_name = (last_name) => {
    this.setState({ last_name });
  };
  setdate = (date) => {
    this.setState({ date });
  };
  setgender = (gender) => {
    this.setState({ gender });
  };
  setpassword = (password) => {
    this.setState({ password });
  };
  setpassword = (password) => {
    this.setState({ password });
  };
  setmobile_number = (mobile_number) => {
    this.setState({ mobile_number });
  };
  setemail = (email) => {
    this.setState({ email });
  };
  render() {
    return (
      <CreateNewUserContext.Provider
        value={{
          //state
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          date: this.state.date,
          password: this.state.password,
          gender: this.state.gender,
          mobile_number: this.state.mobile_number,
          email: this.state.email,

          //function
          setfirst_name: this.setfirst_name,
          setlast_name: this.setlast_name,
          setdate: this.setdate,
          setpassword: this.setpassword,
          setgender: this.setgender,
          setmobile_number: this.setmobile_number,
          setemail: this.setemail,
        }}
      >
        {this.props.children}
      </CreateNewUserContext.Provider>
    );
  }
}
export { CreateUserContext, CreateNewUserContext };
