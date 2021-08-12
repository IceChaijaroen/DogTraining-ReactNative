import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Noti from '../Noti';
import Mydog from './Mydog';

const Stacknoti = createBottomTabNavigator();

export default function Stackmydog() {
    
  return (
    <Stacknoti.Navigator>
      <Stacknoti.Screen name="Mydog" component={Mydog} />
      <Stacknoti.Screen name="Noti" component={Noti} />
    </Stacknoti.Navigator>
  );
}