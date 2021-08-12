import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import MydogInfo from './MydogInfo';
import MydogGraph from './MydogGraph';

const Tab = createMaterialTopTabNavigator();

export default function MydogOld() {
  return (

      <Tab.Navigator>
        <Tab.Screen name="Home" component={MydogInfo} />
        <Tab.Screen name="Settings" component={MydogGraph} />
      </Tab.Navigator>

  );
}

