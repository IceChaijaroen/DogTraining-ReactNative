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
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Progress from '../component/Progress';
import Tabnavigator from './tabnavigator';

const screenWidth = Dimensions.get("window").width;

export default function screenA({ navigation }) {
    const [text, onChangeText] = useState("น้องโบ้");
    const [user, setUser] = useState(1);
    const [udogid, setUdogid] = useState(1);
    const [all, setAll] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const alldata = {
        labels: ["mon", "tue", "wed", "thurs", "fri", "sat", "sun"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43, 12],
                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Dog stastic"] // optional
    };

    const eachdata = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 10, 50, 77, 5, 66],
                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Dog stance stastic"] // optional
    };

    const chartConfig = {
        backgroundGradientFrom: "#000000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#FFFFFF",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(163, 163, 163, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

        return (
            <>

                                {isLoading ? (
                                    <ScrollView style={{ width: '90%' }} horizontal={true}>
                                        <View style={{ width: '100%', height: 290 }}>

                                            <LineChart
                                                style={{ flex: 1, width: '90%', height: '100%' }}
                                                data={{
                                                    labels: [0,2,3,4],
                                                    datasets: [
                                                        {
                                                            data: [0, 100, 200, 300, 400, 500],
                                                            color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                                            strokeWidth: 2 // optional
                                                        }
                                                    ],
                                                    legend: ["Dog stastic"] // optional
                                                }}
                                                width={'1000'}
                                                height={255}
                                                verticalLabelRotation={10}
                                                chartConfig={chartConfig}
                                                bezier
                                            />
                                        </View>
                                    </ScrollView>
                                    // If there is a delay in data, let's let the user know it's loading
                                ) : (
                                    <Text>Loading...</Text>
                                )}

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
