import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './screens/Main';

const Navigator = createStackNavigator({
  Main: { screen: Main },
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;