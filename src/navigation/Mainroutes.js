import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../../store';
import {Provider, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mainroutes = () => {
  const userId = useSelector(state => state.sessionReducer?.user?.uid);
  const [getValue, setGetValue] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('Session_uid').then(value => setGetValue(value));
  }, []);
 
  return (
    <NavigationContainer>
      {getValue || userId ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Mainroutes;
