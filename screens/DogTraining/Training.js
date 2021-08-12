import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList } from 'react-native';
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


export default function Training({ navigation, route }) {

    const [gif, setGif] = useState([]);
    const [train, setTrain] = useState([]);

    useEffect(() => {
        axios.get('http://34.87.28.196/gif.php',
            {
                params: {
                    id: 1
                }
            })
            .then(response => {
                setGif(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })

    useEffect(() => {
        axios.get('http://34.87.28.196/educate.php',
            {
                params: {
                    id: 1
                }
            })
            .then(response => {
                setTrain(response.data);
            })
            .catch(err => {
                console.log(err)
            })
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
        return (
            <>
                <View style={styles.container}>
                    <View style={{ width: '100%', marginTop: '5%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 35, color: 'white', fontFamily: 'FC_Iconic' }}>จับเวลาการฝึกฝน</Text>
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
                        <TouchableOpacity onPress={() => navigation.navigate('StatisTrain')} >
                            <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                <Text style={{ fontSize: 30, color: 'white', fontFamily: 'FC_Iconic' }}>กดปุ่ม</Text>
                                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'FC_Iconic' }}>เพื่อเริ่มจับเวลา</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 40, color: 'white', fontFamily: 'FC_Iconic' }}>ครั้งที่ 1</Text>
                    </View>


                </View>
            </>
        );
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
    }
});
