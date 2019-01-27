import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import itemsReducer from './redux/reducers/ItemReducer/index';
import AppNavigator from './AppNavigator';

const store = createStore(itemsReducer);
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
