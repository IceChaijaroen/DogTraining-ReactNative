import { StatusBar } from 'expo-status-bar';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import EducateSlide from './EducateSlide';

import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function Educate2({ navigation, route }) {
    const { id } = route.params;
    const [train, setTrain] = useState([]);

    useEffect(() => {
        axios.get('http://34.87.28.196/educate.php',
            {
                params: {
                    id: id
                }
            })
            .then(response => {
                setTrain(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })

    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={{ height: 530, width: '100%' }}>
                    <View style={{ width: '100%', justifyContent: 'center', height: '10%', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 35, marginRight: 10, fontFamily: 'FC_Iconic' }}>{item.trainname}</Text>
                        <Image
                            source={{ uri: item.trainimg }}
                            style={{
                                width: 40,
                                height: 40
                            }}
                        />
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '50%', marginBottom: '2%' }}>
                        <Image
                            source={{ uri: item.gif2 }}
                            style={{
                                width: 250,
                                height: 250
                            }}
                        />
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', height: '8%',marginTop:20 }}>
                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-start', height: '100%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Educate', { id: id })} style={{ width: '45%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#515151', borderRadius: 30, elevation: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <FontAwesome5
                                        name='arrow-left'
                                        color={'white'}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '40%', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <Text style={{ fontSize: 28, color: '#4D4D4D', fontFamily: 'FC_Iconic' }}>ขั้นตอนที่ 2</Text>
                        </View>

                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Training', { id: id })} style={{ width: '45%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#515151', borderRadius: 30, elevation: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <FontAwesome5
                                        name='arrow-right'
                                        color={'white'}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: '15%' }}>
                        <Text style={{ fontSize: 25, color: '#4D4D4D', textAlign: 'center', fontFamily: 'FC_Iconic' }}>{item.des2}</Text>
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
        return (
            <>
                {/** -----------Header------------------ */}
                <View style={styles.headercontainer}>
                    <View style={styles.header}>
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: '6%' }}>
                            <View style={{ width: '50%' }}>
                                <TouchableOpacity
                                    style={{ marginLeft: 15 }}
                                    onPress={() => props.navigation.openDrawer()}
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
                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', height: '60%' }}>
                            <View style={{ width: '40%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: '60%', height: 100, borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../img/dog.png')}
                                        style={{
                                            width: '55%',
                                            height: '55%',

                                        }}
                                    />
                                </View>

                            </View>
                            <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                                <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                                    <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}> น้องโบ้ </Text>
                                    </View>
                                    <View style={{ width: '50%', height: '100%', alignItems: 'center' }}>
                                        <View style={styles.capsule}>
                                            <View style={styles.incapsule}></View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                                    <View style={{ width: '80%', height: '100%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}> โกลเด้น รีทรีฟเวอร์ </Text>
                                    </View>
                                    <View style={{ width: '20%', height: '100%', alignItems: 'flex-end' }}>
                                        <Feather
                                            name='triangle'
                                            size={15}
                                            color="#FFFFFF"
                                            style={{
                                                marginRight: 10,
                                                transform: [{ rotate: "180deg" }],
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/** -----------Header------------------ */}



                <View style={styles.container}>
                    <View style={styles.card}>




                        <FlatList
                            data={train}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
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
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 25,
        elevation: 5,
        marginBottom: 5,

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
    }
});
