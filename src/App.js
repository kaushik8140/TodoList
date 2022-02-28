import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Mainroutes from './navigation/Mainroutes';
import configureStore from '../store/store';
import {connect, Provider} from 'react-redux';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Mainroutes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
