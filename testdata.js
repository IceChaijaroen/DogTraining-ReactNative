import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function testdata() {
    const [second, setSecound] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [uid, setUid] = useState(1);
    const [count, setCount] = useState(null);
    const [submit, setSubmit] = useState("");
    const [lastest, setLastest] = useState([]);

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
                    "http://34.87.28.196/insertstatis2.php",
                    JSON.stringify({
                        second: second,
                        uid: uid,
                        count: count
                    })
                )
                .then((response) => {
                    alert(JSON.stringify(response.data));
                    setSecound(0);
                    setIsRunning(false);
                    setSubmit(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }; if (submit) authenticate();
    }, [submit]);


    useEffect(() => {
        axios.get('http://34.87.28.196/showcountlastest.php')
            .then(response => {
                setLastest(response.data);
            })
            .catch(err => {
                console.log(err)
            })
    })


    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        if (isRunning == true) {
            return (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => setSubmit(true)} >
                        <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                            <Text style={{ color: 'white', fontSize: 40, fontFamily: 'FC_Iconic' }}>{second}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20 }}>
                        {lastest.map(item => (
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'black' }}>ครั้งที่ {item.count}</Text>
                        ))}
                    </View>

                </View>
            );
        } else {
            return (
                <>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setIsRunning(true)} >
                            <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                                <Text style={{ fontSize: 30, color: 'white', fontFamily: 'FC_Iconic' }}>กดปุ่ม</Text>
                                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'FC_Iconic' }}>เพื่อเริ่มจับเวลา</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20 }}>
                            {lastest.map(item => (
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'black' }}>ครั้งที่ {item.count}</Text>
                            ))}
                        </View>

                    </View>
                </>
            );
        }

    }
}
{/**
return (
    <>
        <View style={{ width: '100%', alignItems: 'center', height: '50%', justifyContent: 'flex-end' }}>
            <Text>{second}</Text>
        </View>
        <View style={{ width: '100%', height: 180, justifyContent: 'center', alignItems: 'center' }}>

            <TouchableOpacity onPress={() => setIsRunning(true)} >
                <View style={{ width: 130, height: 125, backgroundColor: '#E24B4B', borderRadius: 100, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                    <Text style={{ fontSize: 30, color: 'white', fontFamily: 'FC_Iconic' }}>กดปุ่ม</Text>
                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'FC_Iconic' }}>เพื่อเริ่มจับเวลา</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, padding: 20, height: '50%', justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setIsRunning(true)} style={{ width: '30%', alignItems: 'center' }}>
                <Text>เริ่ม</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRunning(false)} style={{ width: '30%', alignItems: 'center' }}>
                <Text>หยุด</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSubmit(true)} style={{ width: '30%', alignItems: 'center' }}>
                <Text>รีเซ็ท</Text>
            </TouchableOpacity>
        </View>
    </>
) */}
