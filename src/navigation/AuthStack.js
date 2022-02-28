import React, {Component, useEffect} from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screen/LoginScreen';
import SignupScreen from '../Screen/SignupScreen';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  
  );
};

export default AuthStack;