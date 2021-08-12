import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recommend from '../DogTraining/Recommend';
import Training from '../DogTraining/Training';

const Stack = createStackNavigator();

export default function ConnectTraining() {
    
  return (
    <Stack.Navigator>
      <Stack.Screen name="Training" component={Training} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}