// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity
// } from 'react-native';

// export default class ProfileScreen extends Component {

//   render() {
//     return (
//       <View style={styles.container}>
//           <View style={styles.header}></View>
//           <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
//           <View style={styles.body}>
//             <View style={styles.bodyContent}>
//               <Text style={styles.name}>John Doe</Text>
//               <Text style={styles.info}>UX Designer / Mobile developer</Text>
//               <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>

//               <TouchableOpacity style={styles.buttonContainer}>
//                 <Text>Opcion 1</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.buttonContainer}>
//                 <Text>Opcion 2</Text>
//               </TouchableOpacity>
//             </View>
//         </View>
//       </View>
//     );
//   }
// }
// ProfileScreen.navigationOptions = {
//     headerShown: false,
//   };
// const styles = StyleSheet.create({
//   header:{
//     backgroundColor: "#00BFFF",
//     height:200,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom:10,
//     alignSelf:'center',
//     position: 'absolute',
//     marginTop:130
//   },
//   name:{
//     fontSize:22,
//     color:"#FFFFFF",
//     fontWeight:'600',
//   },
//   body:{
//     marginTop:40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding:30,
//   },
//   name:{
//     fontSize:28,
//     color: "#696969",
//     fontWeight: "600"
//   },
//   info:{
//     fontSize:16,
//     color: "#00BFFF",
//     marginTop:10
//   },
//   description:{
//     fontSize:16,
//     color: "#696969",
//     marginTop:10,
//     textAlign: 'center'
//   },
//   buttonContainer: {
//     marginTop:10,
//     height:45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom:20,
//     width:250,
//     borderRadius:30,
//     backgroundColor: "#00BFFF",
//   },
// });

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import ScreenHeader from "../components/ScreenHeader";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      userSelected: [],
      product: {
        name: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        created: "",
        images: [
          "https://bootdey.com/img/Content/avatar/avatar6.png",
          "https://bootdey.com/img/Content/avatar/avatar2.png",
          "https://bootdey.com/img/Content/avatar/avatar3.png",
        ],
        colors: [
          "#00BFFF",
          "#FF1493",
          "#00CED1",
          "#228B22",
          "#20B2AA",
          "#FF4500",
        ],
      },
    };
  }

  __setImageSelected = (image) => {
    this.setState({ selectedImage: image });
  };

  __renderImages = () => {
    return (
      <View style={styles.smallImagesContainer}>
        {this.state.product.images.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() => {
                this.__setImageSelected(prop);
              }}
            >
              <Image style={styles.smallImage} source={{ uri: prop }} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  __renderColors = () => {
    return (
      <View style={styles.contentColors}>
        {this.state.product.colors.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={[styles.btnColor, { backgroundColor: prop }]}
            ></TouchableOpacity>
          );
        })}
      </View>
    );
  };

  render() {
    var mainImage = this.state.selectedImage
      ? this.state.selectedImage
      : this.state.product.images[0];
    return (
      <View style={styles.container}>
        <ScreenHeader navigation={this.props.navigation} />
        <ScrollView style={styles.content}>
          <View style={styles.card}>
            {/* <View style={styles.cardHeader}>
              <Text style={styles.name}>{this.state.product.name}</Text>
            </View> */}
            <View style={styles.cardContent}>
              <View style={styles.coverPhotoContainer}>
                <Image
                  style={styles.coverPhoto}
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/cb/e7/69/cbe769fcb2f807a212b4e989e3f2ec1e.jpg",
                  }}
                />
              </View>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{ uri: mainImage }} />
                </View>
                <View style={styles.activityContainer}>
                  <View style={styles.activity}>
                    <Text>1k</Text>

                    <Text>post</Text>
                  </View>
                  <View style={styles.activity}>
                    <Text>1k</Text>

                    <Text>following</Text>
                  </View>
                  <View style={styles.activity}>
                    <Text>1k</Text>

                    <Text>followers</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.card}></View>
        </ScrollView>
      </View>
    );
  }
}

ProfileScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  content: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    marginTop: -20,
  },
  activityContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  activity: {
    alignItems: "center",
    padding: 17,
  },
  coverPhoto: {
    width: "100%",
    height: 120,
    // resizeMode: "contain",
    // borderRadius: 100,
  },
  mainImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    borderRadius: 100,
  },
  smallImagesContainer: {
    flexDirection: "column",
    marginLeft: 30,
  },
  smallImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  btnColor: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 3,
  },
  contentColors: {
    flexDirection: "row",
  },
  name: {
    fontSize: 22,
    color: "#696969",
    fontWeight: "bold",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "#696969",
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  /******** card **************/
  card: {
    backgroundColor: "white",
  },
  cardContent: {
    // paddingVertical: 12.5,
    paddingHorizontal: 3,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle: {
    color: "#00BFFF",
  },
});
