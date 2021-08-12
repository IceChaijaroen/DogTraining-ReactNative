import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
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

const screenWidth = Dimensions.get("window").width;

export default function showGraph({ navigation }) {
    const [text, onChangeText] = React.useState("น้องโบ้");
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
            {/* -------------------------------Header----------------------------------------- */}
            <View style={styles.header}>
                <View style={{ width: '45%', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={25}
                            color={'white'}

                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 27, color: 'white', fontFamily: 'FC_Iconic' }}>สถิติโดยรวม</Text>
                </View>
                <View style={{ width: '45%', alignItems: 'flex-end', }}>


                </View>
            </View>
            {/* -------------------------------Header----------------------------------------- */}



            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={{ padding: 30, width: '90%' }}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 34, color: '#575757', fontFamily: 'FC_Iconic' }}>สถิติโดยรวม</Text>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <View style={{ width: '25%' }}>
                                        <TouchableOpacity>
                                            <View style={styles.button}>
                                                <Text style={styles.buttontext}>1 สัปดาห์</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '25%', marginLeft: 30 }}>
                                        <TouchableOpacity>
                                            <View style={styles.button2}>
                                                <Text style={styles.buttontext2}>1 เดือน</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '25%', marginLeft: 30 }}>
                                        <TouchableOpacity>
                                            <View style={styles.button2}>
                                                <Text style={styles.buttontext2}>1 ปี</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '100%', height: 70, alignItems: 'center', flexDirection: 'row' }}>
                                <View style={{ marginRight: 15 }}>
                                    <TouchableOpacity style={{ width: '100%' }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'FC_Iconic', color: '#555555' }}> สัปดาห์นี้ </Text>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <TouchableOpacity style={{ width: '100%' }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'FC_Iconic', color: '#C7C7C7' }}> สัปดาห์ที่แล้ว </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginRight: 15 }}>
                                    <TouchableOpacity style={{ width: '100%' }}>
                                        <Text style={{ fontSize: 18, fontFamily: 'FC_Iconic', color: '#C7C7C7' }}> 2 สัปดาห์ที่แล้ว </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ width: '100%', justifyContent: 'center' }}>
                                <LineChart
                                    data={alldata}
                                    width={'300'}
                                    height={256}
                                    verticalLabelRotation={30}
                                    chartConfig={chartConfig}
                                    bezier
                                />
                            </View>


                        </View>
                    </View>
                </View>
            </ScrollView>

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
