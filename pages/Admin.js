import React, { Component } from 'react';
import { Image,Text,TouchableOpacity,StyleSheet } from 'react-native';
// import { 
//   Container, Header, Content,
//    Card, CardItem, Thumbnail, Text, Button,
//     Icon, Left, Body, Right,Footer,FooterTab,Image } from 'native-base';

export default class Admin extends Component {  
  static navigationOptions =({navigate,navigation})=> ({
    headerTitle: 'Admin',
    headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate('Post')} >
              <Image style={{height:30, width:30, marginRight:16}} source={require('../assets/plus.png')} />
            </TouchableOpacity>
    )
  });  
  render() {  
    return (
      <Text>Admin pages</Text>
    );
  }
}
