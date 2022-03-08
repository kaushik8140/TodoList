import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from '../Screen/todolist/todolist';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
};

export default AppStack;
