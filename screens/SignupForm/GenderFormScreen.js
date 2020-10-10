// import { View } from "native-base";
// import React, { Component } from "react";

// export default class GenderFormScreen extends Component {
//   render() {
//     return <View></View>;
//   }
// }
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
  Picker,
} from "react-native";
import SignupHeader from "../../components/SignupHeader";
import { CreateNewUserContext } from "../../context/CreateUserContext";
export default class GenderFormScreen extends Component {
  constructor(props) {
    super(props);
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
              <Text style={styles.nameTittle}>What's your gender?</Text>
              <View style={styles.contenTextContainer}>
                <Text style={styles.contentText}>
                  We'll help you create a new account in a few easy steps.
                </Text>
              </View>
              <View style={styles.formInputContainer}>
                <View style={styles.inputContainer}>
                  <Picker
                    selectedValue={newUser.gender}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      newUser.setgender(itemValue)
                    }
                  >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Others" value="Others" />
                  </Picker>
                </View>
              </View>

              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.ChangeScreen("MobileNumberForm")}
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
GenderFormScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
    width: "100%",
  },
  contenTextContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  contentText: {
    fontSize: 14,
    textAlign: "center",
    color: "#606770",
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
