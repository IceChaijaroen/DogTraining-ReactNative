import { StatusBar } from 'expo-status-bar';
import React, { useState, Component, useEffect } from "react";
import { Keyboard, TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import axios from 'axios';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import {
    SessionStorageProvider,
    useSessionStorage,
} from "react-sessionstorage";

import MyDrawer from '../../component/Drawer';
import ModalPopup from '../../component/ModalPopup';


async function FacebookLogin() {
    try {
        await Facebook.initializeAsync({
            appId: '325365022363734',
        });
        const {
            type,
            token,
            expirationDate,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        } else {
            // type === 'cancel'
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}


export default function Login(props, disabled) {
    const [visible, setVisible] = React.useState(false);

    const [value, setValue] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [googleSubmitting, setGoogleSubmitting] = useState(false);

    const [submit, setSubmit] = useState("");




    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://35.187.253.40/login.php",
                    JSON.stringify({
                        email: email,
                        password: password
                    })
                )

                .then((response) => {
                    if (response.data.onLogin == "true") {
                        props.navigation.navigate("MyDrawer");
                        AsyncStorage.setItem('id', response.data.iduser);
                        AsyncStorage.setItem('udogid', response.data.udogid);
                        setSubmit(false);
                    } else {
                        alert(JSON.stringify(response.data));
                        //setVisible(true)
                        setSubmit(false)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (submit) authenticate();
    }, [submit]);


    const [id, setId] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            await AsyncStorage.getItem('id')
                .then((value) => {
                    setId(value);
                    setIsLoading(true);
                })
        }
        fetchData();
    })


    const emailHandler = (text) => {
        setEmail(text);
    }

    {/*---------------------------- Google Login ------------------------------------------*/ }
    const handleGoogleSignin = () => {
        setGoogleSubmitting(true);
        const config = {
            androidClientId: '161152619465-skl4n676q8hf0hvuvbci96a88erontpa.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        };

        Google.logInAsync(config)
            .then((result) => {
                const { type, user } = result;

                if (type == 'success') {
                    const { email, name, photoUrl } = user;
                    handleMessage('Google signin successful', 'SUCCESS');
                    setTimeout(() => props.navigation.navigate('Home', { email, name, photoUrl }), 1000);
                } else {
                    handleMessage('Google login is fail..');
                }
                setGoogleSubmitting(false);
            })
            .catch((error) => {
                console.log(error);
                handleMessage('An error. Try again');
                setGoogleSubmitting(false);
            });
    };
    {/*-------------------------------------------------------------------------------------*/ }

    return (
        <>
            {isLoading ? (
                <>
                    {id == null ? (
                        <>
                            {/*---------------------- Popup -------------------------------*/}
                            <ModalPopup visible={visible}>
                                <View >
                                    <View style={styles.popClose}>
                                        <TouchableOpacity onPress={() => setVisible(false)}>
                                            <Icon
                                                name='close'
                                                size={15}
                                                color={'black'}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.PopupContent}>
                                    <ScrollView>
                                        <Text style={styles.subfont}>
                                            ข้อมูลไม่ถูกต้อง !
                                        </Text>
                                    </ScrollView>
                                </View>
                            </ModalPopup>
                            {/*---------------------- Popup -------------------------------*/}


                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                                <View style={styles.ImageContent}>
                                    <Image
                                        style={{ width: '35%', height: 195 }}
                                        source={require('../../img/LOGOcom.png')}
                                    />
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
                                            onChangeText={emailHandler}
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
                                    <View style={{ width: '60%', height: 25, alignItems: 'flex-end' }}>
                                        <TouchableOpacity>
                                            <Text style={{ color: '#555555', fontWeight: 'bold' }}>ลืมรหัสผ่าน?</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={disabled ? 0.85 : 1} onPress={() => setSubmit(true)} style={{ width: '35%', alignItems: 'center' }}>
                                        <View style={styles.ButtonLog}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>เข้าสู่ระบบ</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity >
                                    <View style={{ width: '100%', height: 20, alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Text style={{ color: '#9C9C9C', fontWeight: 'bold' }}>{id}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.FacGoo}>
                                    <TouchableOpacity onPress={FacebookLogin} activeOpacity={disabled ? 0.85 : 1} style={{ width: '28%', alignItems: 'center' }}>
                                        <View style={styles.Facebook}>
                                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Facebook</Text>
                                        </View>
                                    </TouchableOpacity>

                                    {!googleSubmitting && (
                                        <TouchableOpacity google={true} onPress={handleGoogleSignin} activeOpacity={disabled ? 0.85 : 1} style={{ width: '28%', alignItems: 'center' }}>
                                            <View style={styles.Google}>
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Google</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )}

                                    {googleSubmitting && (
                                        <TouchableOpacity google={true} disabled={true} style={{ width: '28%', alignItems: 'center' }}>
                                            <View style={styles.Google}>
                                                <ActivityIndicator size='small' color='white' />
                                            </View>
                                        </TouchableOpacity>
                                    )}

                                </View>
                                <View style={styles.AlreadyContent}>
                                    <Text style={{ color: '#555555', fontWeight: 'bold' }}>มีบัญชีอยู่แล้ว?</Text>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Register')} >
                                        <Text style={{ color: '#559BF8', fontWeight: 'bold' }}>สมัครสมาชิกที่นี่</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    ) : (
                        <>
                            <MyDrawer />
                        </>
                    )}
                </>
            ) : (
                <>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="#FFB97D" />
                    </View>
                </>
            )}
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
        height: 270,
        alignItems: 'center',
        justifyContent: 'center'
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
    FacGoo: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    Facebook: {
        width: '100%',
        height: 35,
        backgroundColor: '#3B5998',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginRight: 10
    },
    Google: {
        width: '100%',
        height: 35,
        backgroundColor: '#D43B12',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginLeft: 10
    },
    AlreadyContent: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    popClose: {
        alignItems: 'flex-end',
        width: '95%',
        paddingTop: 10
    },
    PopupHeader: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#555555',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        height: 80
    },
    PopupContent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    subfont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#636262',
    },
    popupFont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },

});
