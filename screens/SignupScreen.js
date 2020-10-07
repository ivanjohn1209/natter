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
import SignupHeader from "../components/SignupHeader";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: "",
    };
    this.ChangeScreen = this.ChangeScreen.bind(this);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  ChangeScreen(e) {
    this.props.navigation.navigate(e);
  }
  render() {
    return (
      <View style={styles.screenContainer}>
        <SignupHeader />

        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={{
              uri: "https://eelspace.com/wp-content/uploads/2020/06/3.gif",
            }}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.contentLabel}>Join Natter</Text>
            <View style={styles.contenTextContainer}>
              <Text style={styles.contentText}>
                We'll help you create a new account in a few easy steps.
              </Text>
            </View>
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.NextButton]}
            onPress={() => this.ChangeScreen("NameForm")}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
SignupScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  screenContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    justifyContent: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },
  contentLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contentText: {
    fontSize: 14,
    textAlign: "center",
    color: "#606770",
  },
  contenTextContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  contentContainer: {
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
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
    marginTop: 50,
    borderRadius: 5,
  },
  NextButton: {
    backgroundColor: "#4300af",
  },
  buttonText: {
    color: "white",
  },
});
