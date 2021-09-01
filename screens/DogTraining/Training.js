import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import { Component } from 'react';
import ModalCount from './ModalCount';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function Training({ navigation, route }) {
    {/**  const { id } = route.params;*/ }
    const [gif, setGif] = useState([]);
    const [train, setTrain] = useState([]);

    {/**   useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/gif.php',
                    {
                        params: {
                            id: id
                        }
                    })
                setGif(response.data)
            } catch (err) {
                alert('Error');
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/educate.php',
                    {
                        params: {
                            id: id
                        }
                    })
                setTrain(response.data)
            } catch {
                alert('.....Error.....')
            }
        }
        fetchData();
    }, [])
*/}

    const [second, setSecound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [uid, setUid] = useState(1);
    const [count, setCount] = useState(null);
    const [submit, setSubmit] = useState("");
    const [lastest, setLastest] = useState([]);
    const [goto, setGoto] = useState();
    let [minus, setMinus] = useState(5);
    const [visible, setVisible] = useState();
    const [insertcheck, setInsertcheck] = useState("");
    const [exerid, setExerid] = useState(1);
    const [countdesc, setCountdesc] = useState([]);


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

const show = countdesc.map(item => (
    item.count
))

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.87.28.196/insertstatis2.php",
                    JSON.stringify({
                        second: second,
                        uid: uid,
                        count: count,
                        exerid:exerid
                    })
                )
                .then((response) => {
                    JSON.stringify(response.data)
                    setSecound(0);
                    setMinus(minus => minus - 1);
                    setIsRunning(false);
                    setSubmit(false);

                })
                .catch((err) => {
                    console.log(err);
                });
        }; if (submit) authenticate();
    }, [submit]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/showcountlastest.php')
                setLastest(response.data)
            } catch (err) {
                console.log('...........')
            }
        }
        fetchData();
    }, [])





    {/**----------------------------goto check.php--------------------------------------------------------- */ }

    const [sumseconds, setSumseconds] = useState([]);
    
    const [sumsit, setSumsit] = useState([]);
    const [showdata, setShowdata] = useState([]);
    

    useEffect(() => {
        const fetchpost = async () => {
            try {
                const response = await axios.get('http://34.87.28.196/testphp/sumseconds.php');
                setSumseconds(response.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchpost();
    }, [sumseconds])

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
    }, [countdesc])

    {/** 

    useEffect(() => {
        axios.get('http://34.87.28.196/testphp/sumstep.php')
            .then(response => {
                setSumsit(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://34.87.28.196/testphp/checktostep.php",
                    JSON.stringify({
                        count: lastest,
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
        if (insertcheck) authenticate();
    }, [insertcheck]);
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
        if (isRunning)authenticate();
    }, [isRunning]);



    useEffect(() => {
        axios.get('http://34.87.28.196/testphp/exer_record.php')
            .then(response => {
                setSumsit(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    function plus() {
        setMinus(5)
        navigation.navigate('StatisTrain');
    }
    {/**------------------------------------------------------------------------------------- */ }


    const change = useEffect(() => {
        setVisible(true);
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

    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('../../assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('../../assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        if (minus == 6) {
            { change }
            return (
                <>
                    <ModalCount visible={visible}>
                        <View style={styles.PopupHeader}>
                            <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <Text style={styles.popupFont}>พักก่อน !</Text>
                            </View>
                        </View>
                        <View style={styles.PopupContent}>
                            <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('../../img/dogtired2.jpg')}
                                    style={{
                                        width: '70%',
                                        height: '80%'
                                    }}
                                />
                            </View>
                            <View style={{ height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>วันนี้ฝึกมากพอแล้ว </Text>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}> เดี๋ยวสุนัขของคุณจะเบื่อเอานะ</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={plus} style={{ width: '40%', height: '95%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ยืนยัน</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ModalCount>
                </>
            )

        } else {
            if (isRunning == true) {
                return (
                    <View style={styles.container}>
                        <View style={{ width: '100%', marginTop: '5%', alignItems: 'center' }}>
                            <Text style={{ fontSize: 35, color: 'white', fontFamily: 'FC_Iconic' }}>จับเวลาการฝึกฝน</Text>
                        </View>
                        <View style={{ width: '100%', height: '35%', justifyContent: 'center', alignItems: 'center' }}>
                            {/**  <FlatList
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
                            */}
                        </View>
                        <View style={{ width: '90%', height: '30%', alignItems: 'center' }}>
                            {/**   <FlatList
                                data={gif}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.idgif}
                            />
                             */}
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
                            <Text style={{ fontSize: 35, color: 'white', fontFamily: 'FC_Iconic' }}>จับเวลาการฝึกฝน</Text>
                        </View>
                        <View style={{ width: '100%', height: '35%', justifyContent: 'center', alignItems: 'center' }}>

                            {/** <FlatList
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
                            */}
                        </View>
                        <View style={{ width: '90%', height: '30%', alignItems: 'center' }}>
                            {/**  <FlatList
                                data={gif}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.idgif}
                            />
                            */}
                        </View>
                        <View style={{ width: '100%', height: 180, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setIsRunning(true)} >
                                <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'FC_Iconic' }}>{minus} กดปุ่ม</Text>
                                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'FC_Iconic' }}>เพื่อเริ่มจับเวลา</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text> {count}</Text>
                            <FlatList
                                data={countdesc}
                                renderItem={({ item }) => (
                                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'black' }}>ครั้งที่ {item.count}</Text>
                                )}
                            />
                        </View>
                    </View>
                )
            }
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
