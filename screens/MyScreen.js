import React, { Component } from "react";
import { Container, Text, Content, Icon, Header } from "native-base";
import ScreenHeader from "../components/ScreenHeader";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import ScreenFooter from "../components/ScreenFooter";
import ScreenMyDay from "../components/ScreenMyDay";
import PostCards from "../components/PostCards";

export default class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Loejee Miguel Lawas Dulaugon",
          time: "1 days a go",
          image:
            "https://i.pinimg.com/originals/31/64/05/31640590a85babe0f00db79e48f81833.jpg",
        },
        {
          id: 2,
          title: "Sit amet, consectetuer",
          time: "2 minutes a go",
          image:
            "https://sayingimages.com/wp-content/uploads/im-going-to-delete-facebook-memes.jpg",
        },
        {
          id: 3,
          title: "Loejee Miguel Lawas Dulaugon",
          time: "3 hour a go",
          image:
            "https://pics.awwmemes.com/this-is-literally-the-best-facebook-post-ever-emegenerator-net-this-51550389.png",
        },
        {
          id: 4,
          title: "Commodo ligula eget dolor.",
          time: "4 months a go",
          image:
            "https://media.makeameme.org/created/your-facebook-post-emfkdi.jpg",
        },
        {
          id: 5,
          title: "Aenean massa. Cum sociis",
          time: "5 weeks a go",
          image: "https://img.memecdn.com/annoying-facebook-post_o_1219237.jpg",
        },
        {
          id: 6,
          title: "Natoque penatibus et magnis",
          time: "6 year a go",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3YalpnUTuU21r1aoXWQ6z1MvNuf8R50u7wA&usqp=CAU",
        },
        {
          id: 7,
          title: "Dis parturient montes, nascetur",
          time: "7 minutes a go",
          image: "https://i.imgflip.com/1ziwd2.jpg",
        },
        {
          id: 8,
          title: "Ridiculus mus. Donec quam",
          time: "8 days a go",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQHyFhdR-GTf_DQYDE38V0cR9S-B0szajgEg&usqp=CAU",
        },
        {
          id: 9,
          title: "Felis, ultricies nec, pellentesque",
          time: "9 minutes a go",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9UnIx59h2sAsH77ZBilm1K6BmQymtCRQ_JA&usqp=CAU",
        },
      ],
    };
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
    marginTop: 20,
    backgroundColor: "#E6E6E6",
  },
  list: {
    backgroundColor: "#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarSection: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  socialBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
