import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Noti from '../Noti';
import MyDrawer from '../../component/Drawer';
import Tabs from '../../component/Tab';


const Stack = createStackNavigator();

export default function GotoNoti() {
    
  return (
    <Stack.Navigator>
      <Stack.Screen name="Noti" component={Noti} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}