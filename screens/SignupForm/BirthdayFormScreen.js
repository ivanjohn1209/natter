import { DatePicker } from "native-base";
import { CreateNewUser } from "../../functions/natterFetch";
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

export default class BirthdayFormScreen extends Component {
  constructor(props) {
    super(props);
    state = {};
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
              <Text style={styles.nameTittle}>What's your birthday?</Text>
              <View style={styles.formInputContainer}>
                <View style={styles.inputContainer}>
                  {/* <DatePicker
                    date={newUser.Date}
                    minimumDate={new Date(Date.now() + 3600 * 1000 * 24)}
                    defaultDate={newUser.Date}
                    // androidMode="spinner"
                    placeholder="select date"
                    onDateChange={(e) => newUser.setDate(e)}
                  /> */}
                  <DatePicker
                    defaultDate={newUser.Date}
                    minimumDate={new Date(1950, 1, 1)}
                    maximumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"spinner"}
                    placeHolderText="Select date"
                    format="YYYY-MM-DD"
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={(e) => newUser.setDate(e)}
                    disabled={false}
                  />
                </View>
              </View>

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.ChangeScreen("GenderForm")}
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
BirthdayFormScreen.navigationOptions = {
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
