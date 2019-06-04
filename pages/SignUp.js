import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { View } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import {FirebaseApp} from '../component/FirebaseConf';
const {width:WIDTH}=Dimensions.get('window');
import { Container, Header, Content, Form, Item, Input, Icon,Button,} from 'native-base';
export default class SignUp extends Component{
  constructor(){
    super();
    // set giá trị của biến ẩn hiện password
    this.state={
      showPassword:true,
      press:false,
      email: '',
      password: ''
    }
  }
  // hàm thay đổi giá trị của biến ẩn hiện pass
  showPass =()=>{
    if(this.state.press==false){
      this.setState({showPassword:false,press:true})
    }
    else{
      this.setState({showPassword:true,press:false})
    }
  }
  // hàm đăng kí
  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true,
      
    });

    // Make a call to firebase to create a new user.
    this.props.firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        // then and catch are methods that we call on the Promise returned from
        // createUserWithEmailAndPassword
        alert('Your account was created!');
        this.setState({
          // Clear out the fields when the user logs in and hide the progress indicator.
          email: '',
          password: '',
          loading: false
        });
        this.props.navigator.push({
          component: Login
        });
    }).catch((error) => {
      // Leave the fields filled when an error occurs and hide the progress indicator.
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }
  render(){
    const {navigate} = this.props.navigation;
    return(      
      <ScrollView>  
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>  
      <ImageBackground style={styles.backgroundContainer} source={require('../assets/background.png')}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
            <Text style={styles.logoText}>New App</Text>
          </View>
          <View style={styles.inputContainer}>
          <Icon active name={'person'} style={styles.Icon} />
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}              
            />
          </View>
          <View style={styles.inputContainer}>
          <Icon active name='beer' style={styles.Icon} />
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              secureTextEntry={this.state.showPassword}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}              
            />
            <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.bntEye} >
              <Icon active name={'eye'}/>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
          <Icon active name='beer' style={styles.Icon} />
            <TextInput
              style={styles.input}
              placeholder={'RePassword'}
              secureTextEntry={this.state.showPassword}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}              
            />
            <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.bntEye} >
              <Icon active name={'eye'}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigate('Home')} style={styles.bntLogin} >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
      </ImageBackground>
      </KeyboardAvoidingView>
      </ScrollView>
     
    );
  }
}
const styles=StyleSheet.create(
  {
    backgroundContainer:{         
      justifyContent:'center', 
      height:800,
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
      fontSize: 36,
      fontWeight:'500',
      margin:16,
      
    },
    input:{
      width:WIDTH-55,
      height:45,
      borderRadius:25,
      fontSize:16,
      paddingLeft:45,
      backgroundColor: 'rgba(255, 255,255, 0.35)',
      color: 'rgba(255, 255,255, 0.35)',
      marginHorizontal: 25

    },
    Icon:{
      position:'absolute',
      top:8,
      left:37

    },
    inputContainer:{
      alignItems:'center',
      marginBottom:32
    },
    bntEye:{
      opacity:0.5,
      position:'absolute',
      top:8,
      right:37
    },
    bntLogin:{
      width:WIDTH-55,
      height:45,
      backgroundColor:'#432577',
      justifyContent:'center',
      marginTop:16,
      borderRadius:25,
    },
    text:{
      color:'rgba(255, 255,255, 0.7)',
      fontSize:16,
      textAlign:'center'
    },
    container:{
      flexGrow :1,    
      width:null,
      height:600,
      margin:0, 
      paddingHorizontal:-5
    },
    
  }
)