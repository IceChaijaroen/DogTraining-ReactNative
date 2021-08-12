import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Doginfo from '../DogInfo';
import Dogtraining from '../DogTraining';
import Home from '../Home';
import Tabs from '../../component/Tab';
import MyDrawer from '../../component/Drawer';
import ConnectTab from '../../component/ConnectTab';


function HomeStack() {
    return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    );
  }

const Stack = createStackNavigator();

export default function ConnectHome (){
    return(
      <>
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{headerShown : false}}/>
          <Stack.Screen name="ConnectTab" component={ConnectTab} options={{headerShown : false}}/>
          
        </Stack.Navigator>
    </>
    )
  }


