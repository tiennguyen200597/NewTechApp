import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Container, Header, Content,
   Card, CardItem, Thumbnail, Text, Button,
    Icon, Left, Body, Right,Footer,FooterTab } from 'native-base';
    export default class FooterHome extends Component {
        render() {
          return (            
                <Footer>
                <FooterTab>
                  <Button vertical>
                    <Icon name="apps" />
                    <Text>Apps</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="camera" />
                    <Text>Camera</Text>
                  </Button>
                  <Button vertical active>
                    <Icon active name="navigate" />
                    <Text>Massage</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="person" />
                    <Text>Me</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="search" />
                    <Text>Search</Text>
                  </Button>
                </FooterTab>
              </Footer>
          );
        }
      }