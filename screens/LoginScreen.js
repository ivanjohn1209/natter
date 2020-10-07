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

export default class LoginScreen extends Component {
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

  handleChange(e, name) {
    this.setState({
      [name]: e,
    });
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Phone or email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.ChangeScreen("Home")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        <View style={styles.buttonSignup}>
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.ChangeScreen("Signup")}
          >
            <Text style={styles.buttonText}>CREATE NEW NATTER ACCOUNT</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
LoginScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#4300af",
    fontWeight: "bold",
  },
  logo: {
    height: 90,
    width: 90,
    resizeMode: "contain",
  },
  buttonSignup: {
    paddingTop: 650,
    position: "absolute",
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
    width: 300,
    backgroundColor: "#4300af12",
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: "#4300af",
  },
  loginText: {
    color: "white",
  },
});
