import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import Testslide from './testslide';
import ScreenA from './screenA';
import ButtonToggleGroup from 'react-native-button-toggle-group';


const screenWidth = Dimensions.get("window").width;



export default function testdata3({ navigation }) {
    const [value, setValue] = useState('Light');
    const list = [
        {
            id: 1,
            name: 'สัปดาห์',
            content: '<Button1 />',
        },
        {
            id: 2,
            name: 'เดือน',
            content: '<Button2 />',
        },
        {
            id: 3,
            name: 'ทั้งหมด',
            content: '<Button3 />',
        },

    ]
    const [active, setActive] = useState();

    return (
        <>
            {/**    <View style={{ flex: 1,justifyContent:'center' }}>
                <ButtonToggleGroup
                    highlightBackgroundColor={'blue'}
                    highlightTextColor={'white'}
                    inactiveBackgroundColor={'transparent'}
                    inactiveTextColor={'grey'}
                    values={['Auto', 'Light', 'Dark']}
                    value={value}
                    onSelect={val => setValue(val)}
                />
            </View>*/}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {list.map((item, k) => (
                    <>
                        <TouchableOpacity
                            active={active === item.content}
                            onPress={() => setActive(item.content)}
                            style={{ width: 100, height: 20, backgroundColor: active === item.content ? '#555555' : '#000000', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ color: 'white' }}>{item.name} </Text>
                        </TouchableOpacity>
                    </>
                ))}
                <View style={{ width: '50%', height: 200, backgroundColor: 'grey', justifyContent: 'center' }}>
                    <Text>{active} </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 100,
    },
    card: {
        alignItems: 'center',
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    rowcontent: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        borderRadius: 30,
        backgroundColor: '#838383',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    button2: {
        borderRadius: 30,
        backgroundColor: 'white',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    buttontext: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'FC_Iconic'
    },
    buttontext2: {
        color: '#555555',
        fontSize: 15,
        fontFamily: 'FC_Iconic'
    },
    headercontainer: {
        width: '100%',
        height: '15%',
        backgroundColor: 'white'
    },
    header: {
        width: '100%',
        height: 80,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#008891',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    headertext: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,
    }

});
