import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './screens/Main';
import NewItem from './screens/NewItem';

const Navigator = createStackNavigator({
  Main: { screen: Main },
  NewItem: { screen: NewItem}
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;