import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './component/Tab';
import MyDrawer from './component/Drawer';
import Home from './screens/Home';
import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login/Login';
import Register from './screens/Login/Register';
import ConnectHome from './screens/Connect/ConnectHome';
import AddDog from './screens/AddDog';
import Dogtraining from './screens/DogTraining';
import Test from './screens/Test';
import Carousel from './component/Corousel/Carousel';
import testdata from './testdata';
import Training from './screens/DogTraining/Training';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [id, setId] = useState();
    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setId(value);
            })
    })



    
  if (id == null) {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="testdata" component={testdata} options={{ headerShown: false }} />
            <Stack.Screen name="Carousel" component={Carousel} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddDog" component={AddDog} options={{ headerShown: false }} />
            <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  } else  {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="testdata" component={testdata} options={{ headerShown: false }} />
            <Stack.Screen name="Carousel" component={Carousel} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddDog" component={AddDog} options={{ headerShown: false }} /><Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }

}

