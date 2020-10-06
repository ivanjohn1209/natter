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
      <Header hasTabs style={{ backgroundColor: config.mainColor }}>
        <Left>
          <Text>back</Text>
        </Left>
        <Body>
          <Text>test</Text>
        </Body>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    height: 90,
    width: 90,
    resizeMode: "contain",
  },
});
