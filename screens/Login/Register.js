import { StatusBar } from 'expo-status-bar';
import React, { useState,Component, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import axios from 'axios';
import { Alert } from 'react-native';

export default function Register (props,disabled) {
        const [username,setUsername] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");

        const [submit,setSubmit] = useState("");

        useEffect(() => {
            const authenticate = async () => {
                axios
                    .post(
                        "http://34.87.28.196/insert.php",
                        JSON.stringify({
                            username : username,
                            email : email,
                            password : password
                        })
                    )
                    .then((response) => {
                        if (response.data=="ok") {
                            props.navigation.navigate("Login");
                            setSubmit(false)
                        } else {
                            alert(JSON.stringify(response.data));
                            setSubmit(false)
                        }
                        
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            };
            if (submit) authenticate();
        },[submit]);

        const usernameHandler = (text) => {
            setUsername(text);
        }
  
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.ImageContent}>
                    <Image
                        style={{ width: '30%', height: 170 }}
                        source={require('../../img/LOGOcom.png')}
                    />
                </View>
                <View style={styles.TextHerder}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#064BA6' }}>สร้างบัญชี</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>สร้างบัญชีใหม่ของคุณ</Text>
                </View>
                <View style={styles.InputContent}>
                    <View style={styles.InputStyle}>
                        <Input
                            placeholder=' Username'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={20}
                                    color='#9C9C9C'
                                />
                            }
                            onChangeText={usernameHandler}
                        />
                    </View>
                    <View style={styles.InputStyle}>
                        <Input
                            placeholder=' Email'
                            leftIcon={
                                <Icons
                                    name='email'
                                    size={20}
                                    color='#9C9C9C'
                                />
                            }
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.InputStyle}>
                        <Input
                            placeholder=' Password'
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='#9C9C9C'
                                />
                            }
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                </View>
                <View style={styles.ButtonContent}>
                    <TouchableOpacity activeOpacity={disabled ? 0.85 : 1} onPress={() => setSubmit(true)} style={{ width: '35%', alignItems: 'center' }}>
                        <View style={styles.Button}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>ยืนยัน</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.AlreadyTextContent}>
                    <Text style={{ color: '#555555', fontWeight: 'bold' }}>มีบัญชีอยู่แล้ว?</Text>
                    <TouchableOpacity  onPress = {() => props.navigation.navigate('Login')}>
                        <Text style={{ color: '#559BF8', fontWeight: 'bold' }}>เข้าสู่ระบบที่นี่</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    ImageContent: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    TextHerder: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        marginBottom: 30
    },
    InputStyle: {
        width: '60%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputContent: {
        width: '100%',
        height: 180,
        alignItems: 'center'
    },
    Button: {
        width: '100%',
        height: 50,
        backgroundColor: '#064BA6',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    ButtonContent: {
        width: '100%',
        height: 110,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    AlreadyTextContent: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    }

});
