import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { View,Image,StyleSheet } from 'react-native';

import Doginfo from '../screens/DogInfo';
import Dogtrain from '../screens/DogTraining';
import Mydog from '../screens//Mydog/Mydog';
import MyDrawer from './Drawer';
import Noti from '../screens/Noti';

import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Notistackscreen from '../screens/StackDogInfo';
import Stackdoginfo from '../screens/StackDogInfo';
import DoginfoConnect from '../screens/Connect/DoginfoConnect';


const Tab = createBottomTabNavigator();


const CustomTabBarButton = ({children, onPress,disabled,focused,touched,invalid}) => (
    <TouchableOpacity
    activeOpacity={disabled ? 1 : 0.7} onPress={!disabled && onPress}
    style={{
        top:-30,
        justifyContent: 'center',
        alignItems: 'center',}}
        onPress={onPress}
    >

        <View style={{
            width:80,
            height:80,
            borderRadius:40,
            backgroundColor:'#FF7E7E',
        }}>
        </View>
        {children}
    </TouchableOpacity>
)

 
export function Tabs (){
    return(
            <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                activeTintColor: '#FF7E7E',
                inactiveTintColor: 'rgba(0,0,0,0.6)',
                showLabel: false,
                backgroundColor:'#FFFFFF',
                style:{
                    position:'absolute',
                    shadowColor: 'rgba(58,55,55,0.1)',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 20,
                    shadowRadius: 15,
                    elevation: 3,
                    borderTopColor: 'transparent',
                    backgroundColor:'#575757',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    height: 70
                }
            }}
        >   
            <Tab.Screen name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image 
                                source={require('../img/home-icon-silhouette.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height:30,
                                    tintColor: focused ? '#FF7E7E' : '#FFFFFF',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Doginfo" 
                component={Doginfo} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image 
                                source={require('../img/istockphoto-1084516046-612x612white.png')}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height:35,
                                    tintColor: focused ? '#FF7E7E' : '#FFFFFF',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Dogtrain" component={Dogtrain}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image
                            source={require('../img/dog-trainingwhi.png')}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? '#FF7E7E' : '#FFFFFF',

                                
                            }}
                        />
                    ),
                    /* 
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )*/
                }}
            />
            <Tab.Screen 
                name="Mydog" 
                component={Mydog} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image 
                                source={require('../img/194de279.png')}
                                resizeMode="contain"
                                style={{
                                    width: 45,
                                    height:45,
                                    tintColor: focused ? '#FF7E7E' : '#FFFFFF',
                                }}
                            />
                        </View>
                    )
                }}
            />
            
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation: 5
    },
    Touch: {
        width:80,
            height:80,
            borderRadius:40,
            backgroundColor:'#FF7E7E',
    },
    Touchvalid: {
        paddingTop:-30
    },
    Touchinvalid: {
        paddingTop:0
    },
})

export default Tabs;