import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList,ActivityIndicator } from 'react-native';
import Opendrawer from '../../component/OpenDrawer';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Progress from '../../component/Progress';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function headertraining({ navigation, route }, disabled) {
    const [isLoading, setIsLoading] = useState(false);
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
    })

    const Load = async () => {
        try {
            let res = await AsyncStorage.getItem('udogid')
            setUdogid(res);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Load();
    });


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
                    console.log('null');
                    setIsLoading(true);
                } else {
                    setDogdata(response.data.all);
                    setIsLoading(true);
                }
            } catch {
                alert("showuserdogfromuser")
            }
        }
        fetchData();
    }, [udogid])


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
                    console.log('null');
                } else {
                    setDoglevel(response.data);
                }
            } catch {
                alert("showdoglevel")
            }
        }
        fetchData();
    }, [udogid])



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
                {!isLoading ? (
                    <>
                        <ActivityIndicator size="large" color="#FFB97D" />
                    </>
                ) : (
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
                                                            width: '100%',
                                                            height: '100%',
                                                            borderRadius: 80
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

                                                    <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
                                                        <Progress  step={item.udogprocess} steps={200} height={15} />
                                                    </View>

                                                </View>

                                            </View>
                                        </View>
                                    )}
                                />


                            </View>
                        </View>
                        {/** -----------Header------------------ */}


                    </>
                )}

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: 100
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
        fontFamily: 'FC_Iconic',
        fontSize: 25,
        color: '#676767'
    },
    capsule: {
        width: '90%',
        height: 15,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    incapsule: {
        width: '75%',
        height: 10,
        borderRadius: 15,
        backgroundColor: '#FFB97D',
        marginLeft: 3
    },
    card: {
        width: '90%',
        height: '100%',
        backgroundColor: '#DADADA',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    minicardcontainer: {
        width: '100%',
        alignItems: 'center',
        height: 95,
        marginBottom: '5%'

    },
    minicard: {
        width: '90%',
        height: '99%',
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
        fontFamily: 'FC_Iconic',
        fontSize: 23,
        color: '#676767'
    }
});
