import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tab';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function ConnectTab (){
    return(
      <>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
          <Stack.Screen name="Tabs" component={Tabs} options={{headerShown : false}}/>
          
        </Stack.Navigator>
    </>
    )
  }


