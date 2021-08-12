import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Image,StyleSheet,Text } from 'react-native';

import History from './History';
import General from './General';
import Treat from './Treat';
import Suitable from './Suitable';

const Top = createMaterialTopTabNavigator();

export default function TopTab() {
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
        <Top.Screen name="History" component={History} 
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >ประวัติ</Text>
                    </View>
                )
            }}
        />
        <Top.Screen name="General" component={General} 
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >ลักษณะทั่วไป</Text>
                    </View>
                )
            }}
        />
        <Top.Screen name="Treat" component={Treat} 
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >การดูแลรักษา</Text>
                    </View>
                )
            }}
        />
        <Top.Screen name="Suitable" component={Suitable} 
            options={{
                tabBarLabel: ({focused}) => (
                    <View>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize:16,
                                fontWeight:'bold',
                                color:'#747474',
                            }}
                        >ผู้เลี้ยงที่เหมาะสม</Text>
                    </View>
                )
            }}
        />
      </Top.Navigator>

  );
}
