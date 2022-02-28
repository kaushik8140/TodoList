import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../../store';
import {Provider, useSelector} from 'react-redux';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Mainroutes = () => {
  const token = useSelector(state => state.sessionReducer.logged);
  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Mainroutes;
