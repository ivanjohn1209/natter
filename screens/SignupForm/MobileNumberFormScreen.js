import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import SignupHeader from "../../components/SignupHeader";
import { CreateNewUserContext } from "../../context/CreateUserContext";
import { CreateNewUser } from "../../functions/natterFetch";
export default class MobileNumberFormScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
    };
    this.ChangeScreen = this.ChangeScreen.bind(this);
  }
  ChangeScreen(e, newuser) {
    var user_firstname = newuser.first_name;
    var user_lastname = newuser.last_name;
    var user_password = newuser.password;
    var user_gender = newuser.gender;
    var user_mobile_number = newuser.mobile_number;
    var user_email = newuser.email;
    var user_birthday = newuser.date;
    CreateNewUser(
      user_firstname,
      user_lastname,
      user_password,
      user_gender,
      user_mobile_number,
      user_email,
      user_birthday
    )
      .then((result) => {
        this.props.navigation.navigate(e);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <CreateNewUserContext.Consumer>
        {(newUser) => (
          <View style={styles.container}>
            <SignupHeader />
            <View style={styles.formContainer}>
              <Text style={styles.nameTittle}>Enter Your Mobile Number</Text>
              <View style={styles.formInputContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={newUser.mobile_number}
                    style={styles.inputs}
                    placeholder="Mobile number"
                    keyboardType="numeric"
                    underlineColorAndroid="transparent"
                    onChangeText={(e) => newUser.setmobile_number(e)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={newUser.email}
                    style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={(e) => newUser.setemail(e)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={newUser.password}
                    style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    onChangeText={(e) => newUser.setpassword(e)}
                  />
                </View>
              </View>

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.ChangeScreen("Home", newUser)}
              >
                <Text style={styles.loginText}>Finish</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </CreateNewUserContext.Consumer>
    );
  }
}
MobileNumberFormScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },
  inputContainer: {
    borderBottomColor: "#dddfe2",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  formContainer: {
    alignItems: "center",
    marginTop: 150,
  },
  formInputContainer: {
    marginTop: 30,
  },
  inputs: {
    height: 45,
    marginLeft: 10,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    borderRadius: 5,
  },
  nameTittle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#4300af",
  },
  loginText: {
    color: "white",
  },
});
