import React, { Component } from 'react';
import { Image,Text,TouchableOpacity,StyleSheet,View } from 'react-native';
import { Button, Textarea } from 'native-base';
// import FireBaseConf from 'FireBaseConf';
// import { View } from 'native-base';
// import { 
//   Container, Header, Content,
//    Card, CardItem, Thumbnail, Text, Button,
//     Icon, Left, Body, Right,Footer,FooterTab,Image } from 'native-base';

export default class Post extends Component {
  static navigationOptions = {
    title: 'Post',
    headerRight:(
            <TouchableOpacity >
              <Text style={{marginRight:16, color:'blue',fontSize:24}}>Post</Text>
            </TouchableOpacity>
    )
  };
  render() {    
    return (
      <View>
        <Textarea rowSpan={5} bordered placeholder="Nội dụng bài viết" />
      </View>
      
    );
  }
}
