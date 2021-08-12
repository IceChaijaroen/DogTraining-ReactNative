import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Image,StyleSheet,Text } from 'react-native';

import MydogInfo from '../screens/Mydog/MydogInfo';
import MydogGraph from '../screens/Mydog/MydogGraph';

const Top = createMaterialTopTabNavigator();

export default function MydogTabs() {
  return (

      <Top.Navigator 
        tabBarOptions={{
            style:{
            shadowColor: 'rgba(58,55,55,0.1)',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 20,
            shadowRadius: 15,
            elevation: 3,
            height: 60,
            justifyContent: 'center',
            }
        }}
      >
        <Top.Screen name="MydogInfo" component={MydogInfo}
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >ข้อมูลสุนัข</Text>
                    </View>
                )
            }}
        />
        <Top.Screen name="MydogGraph" component={MydogGraph} 
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >สถิติการฝึก</Text>
                    </View>
                )
            }}
        />
      </Top.Navigator>

  );
}
