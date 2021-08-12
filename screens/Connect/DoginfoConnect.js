import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../DogInfo/History';
import General from '../DogInfo/General';
import Treat from '../DogInfo/Treat';
import Suitable from '../DogInfo/Suitable';

const Stack = createStackNavigator();

export default function DoginfoConnect({navigation, route}) {
  const { dogid } = route.params;

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="HomeInfo" component={HomeInfo} initialParams={{ id: dogid }} />
      <Stack.Screen name="History" component={History} initialParams={{ id: dogid }}/>
      <Stack.Screen name="General" component={General} initialParams={{ id: dogid }}/>
      <Stack.Screen name="Treat" component={Treat} initialParams={{ id: dogid }}/>
      <Stack.Screen name="Suitable" component={Suitable} initialParams={{ id: dogid }}/>
    </Stack.Navigator>
  );
}