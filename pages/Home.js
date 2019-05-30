import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Container, Header, Content,
   Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Body, Right,Footer,FooterTab } from 'native-base';
import FooterHome from '../component/FooterHome';    
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/avata2.png')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/photo.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left> 
                  <Text>12 Likes </Text>
              </Left>
              <Right>
                  <Text>4 Comments</Text>
              </Right>              
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comment</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="paper-plane" />
                  <Text>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/avata1.png')} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/photo.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left> 
                  <Text>12 Likes</Text>
              </Left>
              <Right>
                  <Text>4 Comments</Text>
              </Right>              
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Like</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comment</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="paper-plane" />
                  <Text>Share</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <FooterHome/>
      </Container>
    );
  }
}