import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
                    <Text style={styles.text}>Home</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="camera" />
                    <Text style={styles.text}>Me</Text>
                  </Button>
                  <Button vertical active>
                    <Icon active name="navigate" />
                    <Text style={styles.text}>Massages</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="person" />
                    <Text style={styles.text}>Netword</Text>
                  </Button>
                  <Button vertical>
                    <Icon name="search" />
                    <Text style={styles.text}>Search</Text>
                  </Button>
                </FooterTab>
              </Footer>
          );
        }
      }
      const styles=StyleSheet.create(
        {
          
          text:{          
            fontSize:9,
            textAlign:'center'
          },
          
          
        }
      )