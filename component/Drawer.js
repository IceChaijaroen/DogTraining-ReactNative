import * as React from 'react';
import { View, Text, Button, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import User from '../screens/User';
import Noti from '../screens/Noti';
import { DrawerContent } from './DrawerContent';
import AddDog from '../screens/AddDog';
import Home from '../screens/Home';
import Help from '../screens/Help';
import Tabs from './Tab';
import DoginfoConnect from '../screens/Connect/DoginfoConnect';
import Educate from '../screens/DogTraining/Educate';
import Recommend from '../screens/DogTraining/Recommend';
import ConnectTraining from '../screens/Connect/ConnectTraining';
import StatisTrain from '../screens/DogTraining/StatisTrain';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Settings/Settings';
import HomeInfo from '../screens/DogInfo/HomeInfo';
import Doginfo from '../screens/DogInfo';
import Training from '../screens/DogTraining/Training';
import Educate2 from '../screens/DogTraining/Educate2';
import showGraph from '../screens/Mydog/showGraph';
import showGraph2 from '../screens/Mydog/showGraph2';
import Login from '../screens/Login/Login';



const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Noti" component={Noti} />
      <Drawer.Screen name="User" component={User} />
      <Drawer.Screen name="AddDog" component={AddDog} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="DoginfoConnect" component={DoginfoConnect} />
      <Drawer.Screen name="Recommend" component={Recommend} />
      <Drawer.Screen name="Educate" component={Educate} />
      <Drawer.Screen name="Educate2" component={Educate2} />
      <Drawer.Screen name="Training" component={Training} />
      <Drawer.Screen name="StatisTrain" component={StatisTrain} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="HomeInfo" component={HomeInfo} />
      <Drawer.Screen name="Doginfo" component={Doginfo} />
      <Drawer.Screen name="showGraph" component={showGraph} />
      <Drawer.Screen name="showGraph2" component={showGraph2} />
      
    </Drawer.Navigator>

  );
}

export default MyDrawer;