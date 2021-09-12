import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import { Component } from 'react';


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Training({ navigation, route }) {
    const [gif, setGif] = useState([]);
    const [train, setTrain] = useState([]);
    const [udogid, setUdogid] = useState();
    const [user, setUser] = useState();


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
                const response = await axios.get('http://35.187.253.40/gif.php',
                    {
                        params: {
                            idtrain: 1
                        }
                    })
                setGif(response.data)
            } catch (err) {
                alert('gif.php//Error');
            }
        }
        fetchData();
    }, gif)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/educate.php',
                    {
                        params: {
                            idtrain: 1
                        }
                    })
                setTrain(response.data)
            } catch {
                alert('.....Educate.php//Error.....')
            }
        }
        fetchData();
    }, train)

    const [second, setSecound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [count, setCount] = useState(null);
    const [submit, setSubmit] = useState("");
    const [visible, setVisible] = useState();
    const [countdesc, setCountdesc] = useState([]);
    const [minute, setMinute] = useState(10);
    const [perseconds, setPersecound] = useState(59);
    const [timestop, setTimestop] = useState(true);


    useEffect(() => {
        if (perseconds < 0) {
            setMinute(minute => minute - 1)
            setPersecound(59);
        }
    }, [perseconds])


    useEffect(() => {
        let interval = null;
        if (timestop) {
            interval = setInterval(() => {
                setPersecound(perseconds => perseconds - 1)
            }, 1000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timestop])


    useEffect(() => {
        let interval = null;
        if (isRunning) {
            setCount(count => count + 1)
            interval = setInterval(() => {
                setSecound(second => second + 1)
            }, 1000);
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning])


    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://35.187.253.40/insertstatis2.php",
                    JSON.stringify({
                        second: second,
                        uid: user,
                        count: count,
                        idtrain: 1,
                        udogid: udogid
                    })
                )
                .then((response) => {
                    JSON.stringify(response.data)
                    setSecound(0);
                    setIsRunning(false);
                    setSubmit(false);

                })
                .catch((err) => {
                    console.log(err);
                });
        }; if (submit) authenticate();
    }, [submit]);



    {/**----------------------------goto check.php--------------------------------------------------------- */ }

    useEffect(() => {
        const fetchpost = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/testphp/countlimit.php', {
                    params: {
                        idtrain: 1,
                        uid:user,
                        udogid:udogid
                    }
                });
                setCountdesc(response.data);
            } catch (err) {
                alert('countlimit.php//error')
            }
        }
        fetchpost();
    }, [countdesc])



    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://35.187.253.40/testphp/checktostep.php",
                    JSON.stringify({
                        idtrain: 1,
                        uid:user,
                        udogid:udogid
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
        if (isRunning) authenticate();
    }, [isRunning]);


    {/**------------------------------------------------------------------------------------- */ }


    const change = useEffect(() => {
        setVisible(true);
        if (minute == 0) {
            setTimestop(false);
        }
    })


    const renderItem = ({ item }) => {
        return (
            <>
                <View style={{ width: 500, flexDirection: 'row' }}>
                    <View style={{ width: '21%' }}>
                        <Text style={{ fontSize: 25, marginRight: 15, color: 'white', fontFamily: 'FC_Iconic' }}>
                            {item.step}
                        </Text>
                    </View>

                    <View style={{ marginTop: 10, width: '2%' }}>
                        <FontAwesome
                            name='circle'
                            color='white'
                            size={12}
                        />
                        {/**------------------------------------------------------------------------------------------- */}
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 60, backgroundColor: 'white', width: 3, borderRadius: 3 }} />
                        </View>
                        {/**------------------------------------------------------------------------------------------- */}
                    </View>

                    <View style={{ width: '50%' }}>
                        <Text style={{ fontSize: 25, marginLeft: 20, color: 'white', fontFamily: 'FC_Iconic' }}>
                            {item.descrip}กดก้นสุนัขของคุณลง ให้สุนัขอยู่ในท่านั่ง
                        </Text>
                    </View>
                </View>
            </>
        )
    }


        if (minute == 0) {
            { change }
            return (
                <>
                    
                        <View style={styles.PopupHeader}>
                            <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Text style={styles.popupFont}>พักก่อน !</Text>
                            </View>
                        </View>
                        <View style={styles.PopupContent}>
                            <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                               
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>วันนี้ฝึกมากพอแล้ว </Text>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}> เดี๋ยวสุนัขของคุณจะเบื่อเอานะ</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('StatisTrain', { idtrain: idtrain })} style={{ width: '40%', height: '95%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ยืนยัน</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
              
                </>
            )

        } else {
            if (isRunning == true) {
                return (
                    <View style={styles.container}>
                        <View style={{ width: '100%', marginTop: '5%', alignItems: 'center' }}>
                            {perseconds != -1 ?
                                (<Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic' }}>{minute}:{perseconds} </Text>)
                                :
                                (<Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic' }}>{minute}:5 </Text>)}

                            <Text style={{ fontSize: 35, color: 'white', fontFamily: 'FC_Iconic' }}>จับเวลาการฝึกฝน </Text>
                        </View>
                        <View style={{ width: '100%', height: '35%', justifyContent: 'center', alignItems: 'center' }}>
                         <FlatList
                                data={train}
                                renderItem={({ item }) => (
                                    <Image
                                        source={{ uri: item.gifall }}
                                        style={{
                                            width: 260,
                                            height: 260
                                        }}
                                    />
                                )}
                                keyExtractor={(item) => item.idtrain}
                            />

                        </View>
                        <View style={{ width: '90%', height: '30%', alignItems: 'center' }}>
                      <FlatList
                                data={gif}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.idgif}
                            />

                        </View>
                        <View style={{ width: '100%', height: 180, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setSubmit(true)} >
                                <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                    <Text style={{ color: 'white', fontSize: 40, fontFamily: 'FC_Iconic' }}>{second}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <FlatList
                                data={countdesc}
                                renderItem={({ item }) => (
                                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'black' }}>ครั้งที่ {item.count}</Text>
                                )}
                            />
                        </View>
                    </View>

                );
            } else {
                return (
                    <View style={styles.container}>
                        <View style={{ width: '100%', marginTop: '5%', alignItems: 'center' }}>
                            {perseconds != -1 ?
                                (<Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic' }}>{minute}:{perseconds} </Text>)
                                :
                                (<Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic' }}>{minute}:5 </Text>)
                            }
                            <Text style={{ fontSize: 35, color: 'white', fontFamily: 'FC_Iconic' }}>จับเวลาการฝึกฝน </Text>
                        </View>
                        <View style={{ width: '100%', height: '35%', justifyContent: 'center', alignItems: 'center' }}>
                            <FlatList
                                data={train}
                                renderItem={({ item }) => (
                                    <Image
                                        source={{ uri: item.gifall }}
                                        style={{
                                            width: 260,
                                            height: 260
                                        }}
                                    />
                                )}
                                keyExtractor={(item) => item.idtrain}
                            />

                        </View>
                        <View style={{ width: '90%', height: '30%', alignItems: 'center' }}>
                       <FlatList
                                data={gif}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.idgif}
                            />


                        </View>
                        <View style={{ width: '100%', height: 180, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setIsRunning(true)} >
                                <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'FC_Iconic' }}>กดปุ่ม</Text>
                                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'FC_Iconic' }}>เพื่อเริ่มจับเวลา</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <FlatList
                                data={countdesc}
                                renderItem={({ item }) => (
                                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'black' }}>ครั้งที่ {item.count} </Text>
                                )}
                            />
                        </View>
                    </View>
                )
            }
        }

    }



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F37575',
        paddingVertical: 25,
        alignItems: 'center'
    },
    imgstyle: {
        width: 40,
        height: 40
    },
    popupFont: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'FC_Iconic'
    },
    popClose: {
        alignItems: 'flex-end',
        width: '100%',
    },
    PopupHeader: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#555555',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        height: '19%',
        backgroundColor: '#FE4343'
    },
    PopupContent: {
        width: '100%',
        alignItems: 'center',
        height: 300,
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});
