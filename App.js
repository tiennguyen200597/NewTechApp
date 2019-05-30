import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

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
    
  }
});

const App = createAppContainer(MainNavigator);

export default App;
