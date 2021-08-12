import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Recommend from '../DogTraining/Recommend';

const Stack = createStackNavigator();

export default function DogTrainingConnect() {
    
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recommend" component={Recommend} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}