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
export default class NameFormScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
    };
    this.ChangeScreen = this.ChangeScreen.bind(this);
  }
  ChangeScreen(e) {
    this.props.navigation.navigate(e);
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
              <Text style={styles.nameTittle}>What's your name?</Text>
              <View style={styles.formInputContainer}>
                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={newUser.first_name}
                    style={styles.inputs}
                    placeholder="First Name"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    onChangeText={(e) => newUser.setfirst_name(e)}
                  />
                </View>

                <View style={styles.inputContainer}>
                  <TextInput
                    defaultValue={newUser.last_name}
                    style={styles.inputs}
                    placeholder="Last Name"
                    underlineColorAndroid="transparent"
                    onChangeText={(e) => newUser.setlast_name(e)}
                  />
                </View>
              </View>

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.ChangeScreen("BirthdayForm")}
              >
                <Text style={styles.loginText}>Next</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </CreateNewUserContext.Consumer>
    );
  }
}
NameFormScreen.navigationOptions = {
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
