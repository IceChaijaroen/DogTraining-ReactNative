import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Animated } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Progress = ({ step, steps, height }) => {
    const [width, setWidth] = useState(0);
    const animatedValue = useRef(new Animated.Value(-1000)).current;
    const reactive = useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    useEffect(() => {
        reactive.setValue(-width + (width * step) / steps);
    }, [step, width]);

    return (
        <>
            <View
                onLayout={(e) => {
                    const newWidth = e.nativeEvent.layout.width;

                    setWidth(newWidth);
                }}
                style={{
                    height,
                    backgroundColor: '#F5F5F5',
                    borderRadius: height,
                    overflow: 'hidden'
                }} >
                <Animated.View
                    style={{
                        height,
                        width: '100%',
                        borderRadius: height,
                        backgroundColor: '#FFB97D',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transform: [{
                            translateX: animatedValue
                        }]
                    }}
                />
            </View>
        </>
    )
}


export default function StatisTrain({ navigation, route }) {
    const [sum, SetSum] = useState([]);
    const [statis, setStatis] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [sumsit, setSumsit] = useState([]);
    const { idtrain } = route.params;
    const [udogid, setUdogid] = useState();
    const [user, setUser] = useState();
    const [dogdata, setDogdata] = useState([]);
    const [doglevel, setDoglevel] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            await AsyncStorage.getItem('id')
                .then((value) => {
                    setUser(value);
                })
        }
        fetchData();
    }, [user])

    useEffect(() => {
        const fetchData = async () => {
            await AsyncStorage.getItem('udogid')
                .then((value) => {
                    setUdogid(value);
                })
        }
        fetchData();
    }, [udogid])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
                    {
                        params: {
                            id: user,
                            udogid: udogid
                        }
                    })
                if (response.data == 'null') {
                    alert("");
                } else {
                    setDogdata(response.data);
                }
            } catch {
                alert("showuserdogfromuser")
            }
        }
        fetchData();
    }, [statis])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showdoglevel.php',
                    {
                        params: {
                            id: user,
                            udogid: udogid
                        }
                    })
                if (response.data == 'null') {
                    alert("");
                } else {
                    setDoglevel(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
        }
        fetchData();
    }, [statis])

    {/**   useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setValue(value);
            })
        axios.get('http://34.87.28.196/showsum.php', {
            params: {
                id: 1
            }
        })
            .then(response => {
                SetSum(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })*/}

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showstatisexer.php',
                    {
                        params: {
                            idtrain: idtrain,
                            uid: user,
                            udogid: udogid
                        }
                    })
                if (response.data == 'null') {
                    setStatis(response.data);
                    setIsLoading(false);
                } else {
                    setStatis(response.data);
                    setIsLoading(true);
                }
            } catch {
                alert("ERROR------getudogid.php")
            }
        }
        fetchData();
    }, [statis])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/testphp/sumstep.php',
                    {
                        params: {
                            idtrain: idtrain,
                            uid: user,
                            udogid: udogid
                        }
                    })
                if (response.data == 'null') {
                    setSumsit(response.data);
                } else {
                    setSumsit(response.data);
                    setIsLoading2(true);
                }
            } catch {
                alert("ERROR------getudogid.php")
            }
        }
        fetchData();
    }, [sumsit])




    const [text, onChangeText] = React.useState("น้องโบ้");
    const alldata = {
        labels: ["1", "2", "3", "4",],
        datasets: [
            {
                data: [1, 3, 52, 61]
                ,
                color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Dog stastic"] // optional
    };

    const eachdata = {
        labels: ["1", "2", "3", "4", "5", "6"],
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

    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('../../assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('../../assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <>

                {/** -----------Header------------------ */}
                <View style={styles.headercontainer}>
                    <View style={styles.header}>
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: '10%' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity
                                    style={{ marginLeft: 15 }}
                                    onPress={() => navigation.openDrawer()}
                                >
                                    <View style={{ width: '15%', height: 28, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                                        <FontAwesome5 name='bars' size={16} color="#5E5E5E" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                <TouchableOpacity
                                    style={{ marginRight: 15 }}
                                    onPress={() => navigation.navigate('Noti')}
                                >
                                    <View style={{ width: 30, height: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                                        <Fontisto name='bell-alt' size={15} color="#5E5E5E" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <FlatList
                            data={dogdata}
                            renderItem={({ item }) => (
                                <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', height: 140 }}>
                                    <View style={{ width: '40%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                        <View style={{ backgroundColor: 'white', width: '60%', height: 100, borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                source={{ uri: item.udogimg }}
                                                style={{
                                                    width: '60%',
                                                    height: '60%',

                                                }}
                                            />
                                        </View>

                                    </View>
                                    <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                                        <View style={{ width: '80%', height: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 25, color: 'white' }}> {item.udogname} </Text>
                                        </View>
                                        <View style={{ width: '80%', height: '25%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 25, color: 'white' }}> {item.udogbreed} </Text>
                                        </View>
                                        <View style={{ width: '80%', height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                            {doglevel.map((item, key) => (
                                                <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
                                                    <Progress key={key} step={item.sumstep} steps={5000} height={15} />
                                                </View>
                                            ))}
                                        </View>

                                    </View>
                                </View>
                            )}
                        />


                    </View>
                </View>
                {/** -----------Header------------------ */}



                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={{ height: 70, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 30, backgroundColor: '#555555', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 40, color: 'white' }}>สถิติ</Text>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 20, marginBottom: 30 }}>
                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#555555' }}>ท่านั่ง</Text>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>

                            {isLoading ? (
                                <ScrollView style={{ width: '90%' }} horizontal={true}>
                                    <View style={{ width: '100%', height: 290 }}>

                                        <LineChart
                                            style={{ flex: 1, width: '90%', height: '100%' }}
                                            data={{
                                                labels: statis.map(item => (
                                                    item.count
                                                )),
                                                datasets: [
                                                    {
                                                        data: statis.map(item => (
                                                            item.seconds
                                                        )),
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
                        </View>
                        <View style={{ width: '100%', height: 60 }}>
                            <View style={{ width: '80%', justifyContent: 'center', height: 30, marginLeft: 40, marginBottom: 5 }}>
                                <Text style={{ color: '#737373', fontFamily: 'FC_Iconic', fontSize: 18 }}>ระดับความสำเร็จ</Text>
                            </View>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                {isLoading2 ? (
                                    <FlatList
                                        width={'80%'}
                                        data={sumsit}
                                        renderItem={({ item }) => (
                                            <Progress step={item.sumstep} steps={500} height={10} />
                                        )}
                                    />
                                ) : (
                                    <>
                                    </>
                                )}


                            </View>
                        </View>
                        <View style={{ width: '95%', height: 60, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ width: '25%', height: '70%' }}>
                                <View style={styles.nextbutton}>
                                    <Text style={styles.textinbutton} >ถัดไป</Text>
                                    <FontAwesome5
                                        name='arrow-right'
                                        color={'white'}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        height: '100%',
        marginBottom: 5
    },
    headercontainer: {
        width: '100%',
        height: '27%',
    },
    header: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#30475E',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        elevation: 5,
        justifyContent: 'center',
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#676767'
    },
    capsule: {
        width: '90%',
        height: 10,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    incapsule: {
        width: '30%',
        height: 8,
        borderRadius: 15,
        backgroundColor: '#FFB97D',
        marginLeft: 3
    },
    card: {
        width: '90%',
        height: '99%',
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
        marginBottom: 5
    },
    minicardcontainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '5%',
        height: 90
    },
    minicard: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        elevation: 10,
        alignItems: 'center'
    },
    subtextcontainer: {
        width: '60%',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#676767'
    },
    nextbutton: {
        width: '100%',
        backgroundColor: '#555555',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    textinbutton: {
        fontFamily: 'FC_Iconic',
        fontSize: 22,
        color: 'white',
        marginRight: 10
    }
});
