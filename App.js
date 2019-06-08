import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Post from './pages/Post';

const MainNavigator = createStackNavigator({
  Login: {screen: Login,          
          navigationOptions: ({ navigation }) => ({
            header: null,
          }),
  },
  Home: {screen: Home},
  SignUp: {
    screen: SignUp,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
    
  },
  Admin: {
    screen: Admin,   
  },
  Post: {
    screen: Post,
  },
});

const App = createAppContainer(MainNavigator);

export default App;
