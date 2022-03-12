import React from 'react';
import HomeNavigator from './src/Navigation/HomeNavigator';
import {Provider} from 'react-redux';
import store from './src/Redux/store';
export default function App() {
  return (
    <>
      <Provider store={store}>
        <HomeNavigator />
      </Provider>
    </>
  );
}
