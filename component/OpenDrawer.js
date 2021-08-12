import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export default function Opendrawer({ navigation }) {
        return(
            <View>
                <TouchableOpacity
                    style={{alignItems:'flex-start',margin:16}}
                    onPress={() => navigation.openDrawer()}
                >
                    <FontAwesome5 name='bars' size={24} color="#656565" />
                </TouchableOpacity>
            </View>
        );
}
