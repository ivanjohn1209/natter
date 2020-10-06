import React, { Component } from "react";
import { Container } from "native-base";
import ScreenHeader from "../components/ScreenHeader";
import { StyleSheet, View } from "react-native";
import ScreenFooter from "../components/ScreenFooter";
import ScreenMyDay from "../components/ScreenMyDay";
import PostCards from "../components/PostCards";

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        {/* <View
          style={{
            minHeight: 85,
            minWidth: 1,
          }}
        >
          <ScreenMyDay />
        </View> */}
        <View style={styles.container}>
          <PostCards />
        </View>
        <ScreenFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}
MyScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
});
