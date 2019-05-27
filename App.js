import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: Home},
});

const App = createAppContainer(MainNavigator);

export default App;
