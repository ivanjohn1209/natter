import React, { Component } from "react";
import { Button, Icon, Footer, FooterTab, Badge } from "native-base";

import { StyleSheet } from "react-native";

import config from "../config";

export default class ScreenFooter extends Component {
  constructor(props) {
    super(props);
    state = {};
    this.ChangeScreen = this.ChangeScreen.bind(this);
  }
  ChangeScreen(e) {
    this.props.navigation.navigate(e);
  }
  render() {
    let routeName = this.props.navigation.state.routeName;
    return (
      <React.Fragment>
        <Footer>
          <FooterTab style={{ backgroundColor: config.mainColor }}>
            <Button vertical onPress={() => this.ChangeScreen("Home")}>
              <Icon
                active
                name="home"
                style={{
                  color: routeName === "Home" ? "#4300af" : config.fontColor,
                }}
              />
            </Button>
            <Button vertical onPress={() => this.ChangeScreen("Friend")}>
              <Icon
                active
                name="people"
                style={{
                  color: routeName === "Friend" ? "#4300af" : config.fontColor,
                }}
              />
            </Button>

            <Button
              onPress={() => this.ChangeScreen("CreatePost")}
              style={{
                height: 50,
                width: 30,
                borderRadius: 60,
                backgroundColor: "#fff",
                borderColor: "transparent",
                elevation: 0,
                borderColor: "#eee",
                borderWidth: 1,
              }}
            >
              <Icon
                active
                name="camera"
                style={{
                  color:
                    routeName === "CreatePost" ? "#4300af" : config.fontColor,
                }}
              />
            </Button>

            <Button vertical onPress={() => this.ChangeScreen("ChatList")}>
              <Icon
                name="chatbubbles"
                style={{
                  color:
                    routeName === "ChatList" ? "#4300af" : config.fontColor,
                }}
              />
            </Button>

            <Button vertical onPress={() => this.ChangeScreen("Menu")}>
              <Icon
                name="menu"
                style={{
                  color: routeName === "Menu" ? "#4300af" : config.fontColor,
                }}
              />
            </Button>
          </FooterTab>
        </Footer>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  listBackground: {
    backgroundColor: "#000",
  },
  Reserved: {
    color: "yellow",
  },
  Vecant: {
    color: "#f39c12",
  },
  Occupied: {
    color: "green",
  },
  Reserved: {
    color: "#529ff3",
  },
  ReservedText: {
    color: "#529ff3",
    fontSize: 10,
  },
  defaultText: {
    color: "#000",
  },
  defaultTextSize: {
    fontSize: 9,
  },
  createPostText: {
    fontSize: 17,
    padding: 10,
    marginBottom: 10,
    marginTop: 15,
    color: "#404040",
    borderRadius: 5,
    fontWeight: "bold",
  },
  checkboxText: {
    padding: 5,
    fontSize: 10,
  },
});
