import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


export default function Ranking({ navigation }) {
    const [rankingcount, setRankingcount] = useState([]);
    const [countuser, setCountuser] = useState();

    useEffect(() => {
        const rankingcount = async () => {
            try {
                const res = await axios.get('http://35.187.253.40/rankingcount.php');
                setRankingcount(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        rankingcount();
    }, [rankingcount])

    useEffect(() => {
        const rankingcount = async () => {
            try {
                const res = await axios.get('http://35.187.253.40/rankingalluser.php');
                setCountuser(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        rankingcount();
    }, [countuser])


    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('../assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('../assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                {/* -------------------------------Header----------------------------------------- */}
                <View style={{ width: '100%', height: 220, backgroundColor: '#FFC372', elevation: 5 }}>
                    <View style={styles.header}>
                        <View style={{ width: '90%', flexDirection: 'row', alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Icon
                                    name="arrow-left"
                                    size={30}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 15, fontSize: 28, color: 'white', fontFamily: 'FC_Iconic' }}>สุนัขที่ถูกเลี้ยงมากที่สุดจากผู้ใช้ทั้งหมด</Text>
                        </View>

                    </View>
                    {rankingcount.map((item, index) => (
                        <>
                            {index == 0 ? (
                                <>
                                    <View style={{ width: '100%', height: '60%', flexDirection: 'row' }}>
                                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image
                                                source={{ uri: item.imgcut }}
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    borderRadius: 50
                                                }}
                                            />
                                        </View>
                                        <View style={{ width: '40%', justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 26, color: '#707070' }}>{item.udogbreed}</Text>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 26, color: '#FF9300' }}>{item.count} ตัว <Text style={{ fontFamily: 'FC_Iconic', fontSize: 16, color: '#707070' }}>จากผู้ใช้ {countuser} คน</Text> </Text>
                                        </View>
                                        <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 40, color: '#707070', color: '#FF9300' }}>No.1</Text>
                                        </View>
                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={{ backgroundColor: 'transparent' }}>

                                    </View>
                                </>
                            )}
                        </>
                    ))}

                </View>

                {/* -------------------------------Header----------------------------------------- */}
                <ScrollView style={{ width: '95%' }}>
                    {rankingcount.map((item, index) => (
                        <>
                            {index == 0 ? (
                                <>
                                    <View style={{ backgroundColor: 'transparent' }}>

                                    </View>
                                </>
                            ) : (
                                <>
                                    <View style={{ width: '95%', marginTop: 10, marginLeft: 10, marginBottom: 10, height: 100, backgroundColor: '#FFC372', borderRadius: 30, flexDirection: 'row', alignItems: 'center', elevation: 5 }}>
                                        <View style={{ justifyContent: 'center', height: '80%', width: '20%', borderEndWidth: 2, borderEndColor: 'white', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#FF9300' }}>{index + 1}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', height: '100%', marginLeft: 30, width: '88%', flexDirection: 'row' }}>
                                            <View style={{ width: '25%', justifyContent: 'center' }}>
                                                <Image
                                                    source={{ uri: item.imgcut }}
                                                    style={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: 50
                                                    }}
                                                />
                                            </View >
                                            <View style={{ width: '70%', justifyContent: 'center' }}>
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 23, color: '#707070' }}>{item.udogbreed}</Text>

                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 23, color: '#FF9300' }}>{item.count} ตัว
                                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 16, color: '#707070' }}> จากผู้ใช้ {countuser} คน</Text>
                                                </Text>

                                            </View>
                                        </View>
                                    </View>
                                </>
                            )}

                        </>
                    ))}
                </ScrollView>



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    imgsize: {
        width: 40,
        height: 40,
    },
    header: {
        width: '100%',
        height: '30%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',

    },
    notiground: {
        backgroundColor: 'white',
        width: '100%',
        height: '15%',
        borderBottomColor: '#F6F6F6',
        borderBottomWidth: 2
    }
});
