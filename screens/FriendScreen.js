import { Icon } from "native-base";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import AddFriendList from "../components/AddFriendList";
import ScreenFooter from "../components/ScreenFooter";
import ScreenHeader from "../components/ScreenHeader";

export default class FriendScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
          description: "User 1",
        },
        {
          id: 2,
          icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
          description: "User 2",
        },
        {
          id: 3,
          icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
          description: "User 3",
        },
        {
          id: 4,
          icon: "https://bootdey.com/img/Content/avatar/avatar4.png",
          description: "User 4",
        },
        {
          id: 5,
          icon: "https://bootdey.com/img/Content/avatar/avatar5.png",
          description: "User 5",
        },
        {
          id: 6,
          icon: "https://bootdey.com/img/Content/avatar/avatar6.png",
          description: "User 6",
        },
        {
          id: 7,
          icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
          description: "User 7",
        },
        {
          id: 8,
          icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
          description: "User 8",
        },
        {
          id: 9,
          icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
          description: "User 9",
        },
      ],
    };
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenHeader />
        <View style={styles.containerList}>
          <View style={styles.inputContainer}>
            <Text style={styles.FriendsLabel}>Find Friends</Text>
            <View style={styles.iconContainer}>
              <Icon name="ios-search" style={[styles.icon, styles.inputIcon]} />
            </View>
          </View>
          <AddFriendList />
        </View>
        <ScreenFooter navigation={this.props.navigation} />
      </View>
    );
  }
}
FriendScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
  formContent: {
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  iconContainer: {
    backgroundColor: "#EBEBEB",
    borderRadius: 100,
    padding: 5,
    alignItems: "flex-end",
  },
  FriendsLabel: {
    fontSize: 23,
    fontWeight: "bold",
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    textAlign: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    alignSelf: "center",
  },
});
