import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './screens/Main';
import NewItem from './screens/NewItem';
import NewComment from './screens/NewComment';

const Navigator = createStackNavigator({
  Main: { screen: Main },
  NewItem: { screen: NewItem },
  NewComment: { screen: NewComment }
});

const AppNavigator = createAppContainer(Navigator);

export default AppNavigator;