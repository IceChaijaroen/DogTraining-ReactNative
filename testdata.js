import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Paginator from './Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default testdata = () => {

    const [text, setText] = useState('');

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('id', text)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to use the data to the storage')
        }
    }

    const redData = async () => {
        try {
            const userText = await AsyncStorage.getItem('id')
            if (userText !== null) {
                setText(userText)
            }
        } catch (e) {
            alert('Failed to fath the data from storage')
        }
    }

    useEffect(() => {
        redData()
    }, [])

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            alert("Storage successfully cleared")
        } catch (e) {
            alert('Failed to clear the async storage')
        }
    }

    const onChangeText = userText => setText(userText)

    const onSumitEditing = () => {
        if (!text)
            return
        saveData(text)
        setText('')
    }


    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <View style={styles.container}>
                <View style={styles.InputContent}>
                    <View style={styles.InputStyle}>
                        <Input
                        value={text}
                            placeholder=' Username'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={20}
                                    color='#9C9C9C'
                                />
                            }
                            onChangeText={onChangeText}
                            onSubmitEditing={onSumitEditing}
                        />
                    </View>
                    <View style={{ width: '60%', height: 25, alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={{ color: '#555555', fontWeight: 'bold' }}>{text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={clearStorage} style={{ width: '35%', alignItems: 'center' }}>
                        <View style={styles.ButtonLog}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    InputContent: {
        width: '100%',
        height: 170,
        alignItems: 'center'
    },
    InputStyle: {
        width: '60%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonLog: {
        width: '100%',
        height: 50,
        backgroundColor: '#064BA6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
});


