// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity
// } from 'react-native';
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//       title: 'Welcome',
//     };
//     render() {
//       const {navigate} = this.props.navigation;
//       return(

//         <View style={styles.container}>
//             <View >
//                 <Image  style={{width:70, height: 70}}
//                         source={require('../assets/network.png')}/>
//                 <Text style={styles.logoText}>Welcome to My app.</Text>
//             </View>

//             <View>
//                 <Image style={styles.inputImage}
//                        source={require('../assets/letter.png')}/>
//                 <TextInput style={styles.inputBox}
//                            underlineColorAndroid='rgba(0,0,0,0)'
//                            placeholder="Email"
//                            textAlign='center'
//                            placeholderTextColor = "#ffffff"
//                            selectionColor="#fff"
//                            keyboardType="email-address"
//                            onSubmitEditing={()=> this.password.focus()}
//                 />
//             </View>
//             <View>
//                 <Image  style={styles.inputImage}
//                         source={require('../assets/settings.png')}/>
//                 <TextInput style={styles.inputBox}
//                            underlineColorAndroid='rgba(0,0,0,0)'
//                            textAlign='center'
//                            placeholder="Password"
//                            secureTextEntry={true}
//                            placeholderTextColor = "#ffffff"
//                            ref={(input) => this.password = input}
//                 />
//             </View>
//             <TouchableOpacity style={styles.button} onPress={() => navigate('Profile')}>
//                 <Text style={styles.buttonText}>Login</Text>
//             </TouchableOpacity>

//         </View>


//     )
//     }
//   }
//   const styles = StyleSheet.create({
//     container : {
//         backgroundColor:'#1c313a',
//         flexGrow: 1,
//         justifyContent:'center',
//         alignItems: 'center'
//     },

//     inputBox: {
//         width:300,
//         height:45,
//         backgroundColor:'rgba(255, 255,255,0.2)',
//         borderRadius: 25,
//         paddingHorizontal:16,
//         fontSize:16,
//         color:'#ffffff',
//         marginVertical: 10
//     },
//     button: {
//         width:300,
//         backgroundColor:'green',
//         borderRadius: 25,
//         marginVertical: 10,
//         paddingVertical: 13
//     },
//     buttonText: {
//         fontSize:16,
//         fontWeight:'500',
//         color:'white',
//         textAlign:'center'
//     },
//     inputImage:{
//         position:'absolute',
//         width:30,
//         height:30,
//         top: 18,
//         left:10
//     },
//     logoText : {
//         marginVertical: 15,
//         fontSize:18,
//         color:'rgba(255, 255, 255, 0.7)'
//     }
    

// });
// import React, { Component } from 'react';
// import {
//     StyleSheet,
       
//     Image,
// } from 'react-native';

// import { Container, Header, Content, Form, Item, Input, Icon,Button,Text, View,} from 'native-base';
// export default class FloatingLabelExample extends Component {
//     static navigationOptions = {
//               title: 'Welcome',
//             };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Container style={styles.container}>
//         {/* <Header>
                          
//         </Header> */}
//         <Content>
//             <View style={styles.inputImage}>
//             <Image 
//                         source={require('../assets/network.png')}/>
//                 <Text style={styles.logoText}>Welcome to My app.</Text> 
//             </View>
                 
//           <Form>
//           <Item>
//             <Icon active name='home' />
//             <Input placeholder='Icon Textbox'/>
//           </Item>
//           <Item>
//             <Icon active name='home' />
//             <Input placeholder='Icon Textbox'/>
//           </Item>
//             <Button block onPress={() => navigate('Home')}>
//             <Text>Login</Text>
//           </Button>
//           </Form>
//         </Content>
//       </Container>
//     );
//   }
// }
//   const styles = StyleSheet.create({
//     container : {
//         backgroundColor:'#1c313a',
//         // flexGrow: 1,
//         justifyContent:'center',
//         // alignItems: 'center'
//     },
//         inputImage:{
//             flexGrow: 1,
//             justifyContent:'center',
//             alignItems: 'center',
//     },
// });


import React, { Component } from 'react';
import {
    StyleSheet,
       ImageBackground,
    Image,
    Text
} from 'react-native';
import { View } from 'native-base';

export default class Login extends Component{
  render(){
    return(
      <ImageBackground style={styles.backgroundContainer} source={require('../assets/background.png')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={styles.logoText}>New App</Text>
          </View>
      </ImageBackground>
    );
  }
}
const styles=StyleSheet.create(
  {
    backgroundContainer:{
      flex:1,     
      justifyContent:'center',
      alignItems:'center'
    },
    logoContainer:{
        alignItems:'center'
    },
    logo:{
      width: 120,
      height: 120
    },
    logoText:{
      color:'white',
      fontSize: 20,
      fontWeight:'500',
      marginTop:10,
      opacity:0.5
    },
    
  }
)