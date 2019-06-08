import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';
import { View } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
const { width: WIDTH } = Dimensions.get('window');
import { Container, Header, Content, Form, Item, Input, Icon, Button, } from 'native-base';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: true,
      press: false,
      email:'',
      password:'',
    }
  }
  // ham goi post start
  HttpPost = () => {
    fetch('https://www.parduota.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((response) => response.json())
    .then((responseJson) => {

      //Alert.alert(responseJson.status);

      if (responseJson.status == 'ok') {
        Alert.alert("Login Successful");
        this.props.navigation.navigate('Home');
      }

      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
    // this.state ={
    //   email: '',
    //   password: '',
    // }
  }
  // ham goi post end
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPassword: false, press: true })
    }
    else {
      this.setState({ showPassword: true, press: false })
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
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
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon active name='beer' style={styles.Icon} />
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry={this.state.showPassword}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              />
              <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.bntEye} >
                <Icon active name={'eye'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigate('Admin')} style={styles.bntLogin} >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('SignUp')} style={styles.btnSignUp} >
              <Text style={styles.text}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>this.HttpPost()} style={styles.btnSignUp} >
              <Text style={styles.text}>Don't have an account? Sign Up</Text>
            </TouchableOpacity> */}
          </ImageBackground>
        </KeyboardAvoidingView>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create(
  {
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      height: 800,
      alignItems: 'center'
    },
    logoContainer: {
      alignItems: 'center'
    },
    logo: {
      marginTop: 150,
      width: 120,
      height: 120
    },
    logoText: {
      color: 'white',
      fontSize: 36,
      fontWeight: '500',
      margin: 16,
      marginBottom: 50


    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(255, 255,255, 0.35)',
      color: 'rgba(255, 255,255, 0.35)',
      marginHorizontal: 25

    },
    Icon: {
      position: 'absolute',
      top: 8,
      left: 37

    },
    inputContainer: {
      alignItems: 'center',
      marginBottom: 32
    },
    bntEye: {
      opacity: 0.5,
      position: 'absolute',
      top: 8,
      right: 37
    },
    bntLogin: {
      width: WIDTH - 55,
      height: 45,
      backgroundColor: '#432577',
      justifyContent: 'center',
      marginTop: 16,
      borderRadius: 25,
    },
    text: {
      color: 'rgba(255, 255,255, 0.7)',
      fontSize: 16,
      textAlign: 'center'
    },
    container: {
      flexGrow: 1,
      width: null,
      height: 500,
      margin: 0,
      paddingHorizontal: -5
    },
    btnSignUp: {
      marginTop: 150
    }

  }
)