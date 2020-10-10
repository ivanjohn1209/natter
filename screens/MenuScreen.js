import { View } from "native-base";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

/**
 * <Just potential options you can press, not final.>
 * <Menu screen / Profile screen sidebar:>
 * Archive
 * Saved items
 * QR Code ( for people to easily follow your acc )
 * Settings Button
 * Help and Support
 * About
 * Log out
 */

let {height, width} = Dimensions.get('window');

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // i have no idea how dis works lul
      data: [
        {id:1,  title: "Archive",      color:"#FFFFFF", image:""},
        {id:2,  title: "Saved Items",     color:"#FFFFFF", image:""},
        {id:3,  title: "QR Code",     color:"#FFFFFF", image:""} ,
        {id:4,  title: "Settings",   color:"#FFFFFF", image:""} ,
        {id:8,  title: "Help and Support",    color:"#FFFFFF", image:""} ,
        {id:9,  title: "About", color:"#FFFFFF", image:""} ,
        {id:10, title: "Log out",     color:"#FFFFFF", image:""} ,
      ]
    };
  }
clickEventListener(item) {
  Alert.alert(item.title)
}

  render() {
    return (
      <View style={styles.container}>
      <FlatList style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={this.state.data}
        horizontal={false}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.cardImage} source={{uri:item.image}}/>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:55,
    flexDirection:'row',
    padding:20,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 0,
    width: 0,
  },
  title:{
    fontSize:20,
    flex:1,
    color:"#000000",
    marginLeft:5
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 0,
    width: 0, 
  }
});     

MenuScreen.navigationOptions = {
  headerShown: false,
};