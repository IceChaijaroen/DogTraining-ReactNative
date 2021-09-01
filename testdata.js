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
            <Text>{step}</Text>
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


export default function testdata({ navigation }) {

    const [record, setRecord] = useState(49);
    const [step, setStep] = useState(48);
    const [exerid, setExerid] = useState(1);
    const [sumseconds, setSumseconds] = useState(10);
    const [isLoading, seIsLoading] = useState(false);
    const [tocheck, setTocheck] = useState(false);


    const [countdesc, setCountdesc] = useState(30);
    const [sumsit, setSumsit] = useState([]);
    const [showdata, setShowdata] = useState([]);

    {/** 
    const fetchData = () => {
        const countlimit = 'http://34.87.28.196/testphp/countlimit.php';
        const sumstep = 'http://34.87.28.196/testphp/sumstep.php';

        const getCountlimit = axios.get(countlimit)
        const getSumstep = axios.get(sumstep)
        axios.all([getCountlimit, getSumstep]).then(
            axios.spread((...allData) => {
                const AlldataCountlimit = allData[0].data.count
                const AlldataSumstep = allData[1].data.result

                setCountdesc(AlldataCountlimit)
                setSumsit(AlldataSumstep)
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])
*/}


    useEffect(() => {
        const fetchpost = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/testphp/countlimit.php');
                setCountdesc(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchpost();
    }, [])







    useEffect(() => {
        axios.get('http://34.87.28.196/testphp/sumstep.php')
            .then(response => {
                setSumsit(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    {/**

    useEffect(() => {
        const fetchpost = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/testphp/checktostep.php',
                    JSON.stringify({
                        count: countdesc,
                        exerid: exerid,
                        sumseconds: sumseconds
                    })
                )
                console.log(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchpost();
    }, [])
 */}


    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.87.28.196/testphp/checktostep.php",
                    JSON.stringify({
                        count: countdesc,
                        exerid: exerid,
                        sumseconds: sumseconds
                    })
                )
                .then((response) => {
                    if (response.data == 'notyet') {
                        alert('Fuck');
                    } else {
                        alert(JSON.stringify(response.data));
                        seIsLoading(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (countdesc == 10 || countdesc == 20 ||countdesc == 30 ) authenticate();
    }, []);






    {/** 
    useEffect(() => {
        axios.get('')
            .then(response => {
                setCountdesc(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })



    const count = countdesc.map(item => (
        item.count
    ))


    useEffect(() => {
        axios.get('http://34.87.28.196/testphp/sumstep.php')
            .then(response => {
                setSumsit(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })
*/}
    {/** 
     useEffect(() => {
        axios.get('http://34.87.28.196/testphp/checktostep.php', {
            params: {
                count: countdesc,
                exerid: exerid,
                sumseconds: sumseconds
            }
        })
            .then(response => {
                setRecord(response.data);
                setIsLoading(true);
            })
            .catch(err => {
                console.log(err)
            })
    })
   */}






    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <>
                {isLoading ? (

                    <View style={{ flex: 1, justifyContent: 'center' }}>

                        {sumsit.map(item => (
                            <Progress step={item.result} steps={500} height={10} />
                        ))}


                    </View>


                ) : (
                    <Text style={{ fontSize: 100 }}>Loading...</Text>
                )}
            </>
        )
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
