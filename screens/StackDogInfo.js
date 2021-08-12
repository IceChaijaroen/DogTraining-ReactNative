import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Doginfo from './DogInfo';
import Noti from './Noti';

const Stacknoti = createBottomTabNavigator();

export default function Stackdoginfo() {
    
  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="doginfo" component={Doginfo} />
      <Stacknoti.Screen name="Noti" component={Noti} />
    </Stacknoti.Navigator>
  );
}