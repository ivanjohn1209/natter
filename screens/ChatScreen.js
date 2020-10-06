import { Body, Header, Icon, Right, Button, Left } from "native-base";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import config from "../config";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 4,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 5,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 6,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 7,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 8,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 9,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
      ],
      userChatData: [],
    };
  }
  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", () => {
      const { state } = this.props.navigation;
      console.log(state.params.userChatData);
      this.setState({
        userChatData: state.params.userChatData,
      });
    });
  }
  renderDate = (date) => {
    return <Text style={styles.time}>{date}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <Header hasTabs style={{ backgroundColor: config.mainColor }}>
          <Left>
            <TouchableHighlight onPress={() => this.ChangeScreen("ChatList")}>
              <Icon name="arrow-back" style={{ color: config.fontColor }} />
            </TouchableHighlight>
          </Left>
          <Body style={styles.nameContainer}>
            <Image
              style={styles.logo}
              source={{ uri: this.state.userChatData.image }}
            />
            <Text style={styles.name}>{this.state.userChatData.name}</Text>
          </Body>
          <Right>
            <TouchableHighlight>
              <Icon
                name="information-circle-outline"
                style={{ color: config.fontColor }}
              />
            </TouchableHighlight>
          </Right>
        </Header>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            const item = message.item;
            let inMessage = item.type === "in";
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              onChangeText={(name_address) => this.setState({ name_address })}
            />
          </View>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={{
                uri: "https://img.icons8.com/small/75/ffffff/filled-sent.png",
              }}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
ChatScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: "flex-start",
  },
  itemOut: {
    alignSelf: "flex-end",
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#4300af",
  },
});
