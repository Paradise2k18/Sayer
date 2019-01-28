import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import itemsReducer from './redux/reducers/ItemReducer/index';
import AppNavigator from './AppNavigator';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 
};
const pReducer = persistReducer(persistConfig, itemsReducer);
const store = createStore(pReducer);
const persistor = persistStore(store);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
