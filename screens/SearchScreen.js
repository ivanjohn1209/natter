import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, View } from 'native-base';
import config from '../config'
import { StatusBar } from 'react-native';

export default class SearchScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Header searchBar style={{ backgroundColor: config.mainColor }}>

            <Item>

              <Icon onPress={e => this.props.navigation.navigate('Home')}
                style={{}} name='arrow-back' style={{ color: config.fontColor, backgroundColor: config.mainColor }} />

              <Input style={{}} placeholder="Search for items" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <View >
            <StatusBar barStyle='dark-content' backgroundColor='#fff'
            />
          </View>
        </Container>
      </React.Fragment>
    );
  }
}
SearchScreen.navigationOptions = {
  header: null
};