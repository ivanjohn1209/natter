import React, { Component } from "react";
import { Header, Title, Button, Left, Body, Icon, Right } from "native-base";
import config from "../config";
import { Image, StyleSheet } from "react-native";

export default class ScreenHeader extends Component {
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
        <Body>
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1449137828/vgizlmjm9r9qre4r51lx.png",
            }}
          />
        </Body>
        <Right>
          <Button transparent onPress={() => this.ChangeScreen("Search")}>
            <Icon name="search" style={{ color: config.fontColor }} />
          </Button>
          <Button transparent onPress={() => this.ChangeScreen("ChatList")}>
            <Icon name="notifications" style={{ color: config.fontColor }} />
          </Button>
        </Right>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    height: 90,
    width: 90,
    marginTop: 10,
    // borderRadius: 100
  },
});
