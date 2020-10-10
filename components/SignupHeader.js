import React, { Component } from "react";
import {
  Header,
  Title,
  Button,
  Left,
  Body,
  Icon,
  Right,
  Text,
} from "native-base";
import config from "../config";
import { Image, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default class SignupHeader extends Component {
  constructor(props) {
    super(props);
    state = {};
    this.ChangeScreen = this.ChangeScreen.bind(this);
  }
  ChangeScreen(e) {
    this.props.navigation.navigate(e);
  }
  render() {
    return (
      <Header
        hasTabs
        style={{
          backgroundColor: config.mainColor,
          borderBottomColor: "#dddfe2",
          borderBottomWidth: 1,
        }}
      >
        <Body style={styles.HeaderBody}>
          <TouchableHighlight>
            <Icon name="arrow-back" />
          </TouchableHighlight>
          <Text style={styles.HeaderTittle}>Create Account</Text>
        </Body>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  HeaderBody: {
    flexDirection: "row",
    paddingLeft: 10,
  },
  HeaderTittle: {
    fontSize: 20,
    marginLeft: 15,
  },
});
