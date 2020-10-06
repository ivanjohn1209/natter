import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Content, Text, View } from "native-base";
import { StyleSheet } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

export default class AddFriendList extends Component {
  render() {
    return (
      <Container style={styles.root}>
        <Content showsVerticalScrollIndicator={false}>
          {[...Array(50)].map((val, key) => {
            return (
              <TouchableHighlight>
                <View style={styles.container}>
                  <Image
                    source={{
                      uri: "https://bootdey.com/img/Content/avatar/avatar5.png",
                    }}
                    style={styles.avatar}
                  />
                  <View style={styles.content}>
                    <View style={styles.text}>
                      <Text style={styles.name}>John Ivan Pagdayawon</Text>
                    </View>
                    <Text style={styles.timeAgo}>2 hours ago</Text>
                    <View style={styles.addFriendBtn}>
                      <TouchableOpacity style={styles.AddButton}>
                        <Text style={styles.AddButtonText}>Add Friend</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.RemoveButton}>
                        <Text style={styles.RemoveButtonText}>Remove</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            );
          })}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
  },
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "flex-start",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  text: {
    marginBottom: 5,
    width: "100%",
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: "absolute",
    right: 0,
    height: 50,
    width: 50,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969",
  },
  name: {
    fontSize: 20,
    color: "#1c1c1c",
  },

  AddButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#4300af",
  },
  RemoveButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 5,
    backgroundColor: "#EBEBEB",
  },
  AddButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  RemoveButtonText: {
    color: "#1c1c1c",
    fontSize: 15,
  },
  addFriendBtn: {
    flexDirection: "row",
  },
});
