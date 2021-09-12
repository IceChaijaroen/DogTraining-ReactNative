import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Image, StyleSheet, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MydogInfo from '../screens/Mydog/MydogInfo';
import MydogGraph from '../screens/Mydog/MydogGraph';
import screenA from './screenA';
import screenB from './screenB';
import Tab from './tab';

const Top = createMaterialTopTabNavigator();
const Tabs = createBottomTabNavigator();

export default function Tabnavigator() {
    return (

        <Top.Navigator>
            <Top.Screen
                name="screenA"
                component={screenA}
                options={{
                    tabBarButton: (props) => <Tab label="allstatis" {...props} />
                }} />
            <Top.Screen
                name="screenB"
                component={screenB}
                options={{
                    tabBarButton: (props) => <Tab label="eachstatis" {...props} />
                }} />
        </Top.Navigator>

    );
}
