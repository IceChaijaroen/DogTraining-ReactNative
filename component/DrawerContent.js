import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { PickerIOSItem } from 'react-native';

export function DrawerContent(props) {
    const [user, setValue] = useState();
    const [udata, setUdata] = useState([]);
    const [dogdata, setDogdata] = useState([]);
    const [udogid, setUdogid] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setValue(value);
                axios.get('http://35.187.253.40/showuser.php',
                    {
                        params: {
                            id: user
                        }
                    })
                    .then(response => {
                        setUdata(response.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showuserdog.php',
                    {
                        params: {
                            id: user
                        }
                    })
                setDogdata(response.data.all);
                setUdogid(response.data.udogid);
            } catch {
                alert("ERROR------getudogid.php")
            }
        }
        fetchData();
    }, [dogdata])


    async function logout() {
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('udogid');
        props.navigation.navigate('Login');

    }



    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={style.drawerContent}>
                    <View style={style.userInfoSection}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <View style={{ flexDirection: 'row' }}>
                                <FlatList
                                    data={udata}
                                    renderItem={
                                        ({ item }) => (
                                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                                <Avatar.Image
                                                    source={{ uri: item.img }}
                                                    size={50}
                                                />
                                                <View style={{ padding: 10 }}>
                                                    <Title style={{ fontSize: 15 }}>{item.name}  {item.lastname} </Title>
                                                </View>
                                            </View>
                                        )}
                                />

                            </View>
                        </TouchableOpacity>
                    </View>

                    {/**------------------------------------------------------------------------------------------- */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                        <View>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                    </View>
                    {/**------------------------------------------------------------------------------------------- */}


                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>สถานะการฝึก</Text>
                        {dogdata == 'null' ? (
                            <View>

                            </View>
                        ) : (
                            <View>
                                <FlatList
                                    data={dogdata}
                                    renderItem={
                                        ({ item }) => (
                                            <TouchableOpacity onPress={() => props.navigation.navigate('Tabs',AsyncStorage.setItem('udogid',item.udogid))}>
                                                <View style={style.card}>
                                                    <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                        <Avatar.Image
                                                            source={{ uri: item.udogimg }}
                                                            size={35}
                                                            backgroundColor={'white'}
                                                        />
                                                    </View>
                                                    <View style={{ width: '70%', paddingTop: 10 }}>
                                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>ชื่อ : {item.udogname}</Text>
                                                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>สถานะ : {item.udogstatus}</Text>
                                                        <View style={style.capsule}>
                                                            <View style={style.incapsule}></View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                />
                            </View>
                        )}

                        <Drawer.Section>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="plus-circle"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="เพิ่มสุนัข"
                                onPress={() => { props.navigation.navigate('AddDog') }}
                            />
                        </Drawer.Section>
                    </View>

                    {/**------------------------------------------------------------------------------------------- */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                        <View>
                        </View>
                        <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                    </View>
                    {/**------------------------------------------------------------------------------------------- */}


                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="หน้าแรก"
                            labelStyle={{ fontWeight: 'bold' }}
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="page-layout-footer"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Tabs"
                            labelStyle={{ fontWeight: 'bold' }}
                            onPress={() => { props.navigation.navigate('Tabs') }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={style.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="help-circle-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="ช่วยเหลือ"
                    labelStyle={{ fontWeight: 'bold' }}
                    onPress={() => { props.navigation.navigate('Help') }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icons
                            name="settings"
                            color={color}
                            size={size}
                        />
                    )}
                    label="ตั้งค่า"
                    labelStyle={{ fontWeight: 'bold' }}
                    onPress={() => { }}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="ออกจากระบบ"
                    labelStyle={{ fontWeight: 'bold' }}
                    onPress={logout}
                />
            </Drawer.Section>
        </View>
    );
}

const style = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
    },
    drawerContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: 'white',

    },
    card: {
        flexDirection: 'row',
        width: '90%',
        height: 65,
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 8,
        marginLeft: 3,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    capsule: {
        marginTop: 5,
        width: '90%',
        height: 12,
        borderRadius: 15,
        backgroundColor: '#F5F5F5'
    },
    incapsule: {
        width: '75%',
        height: 12,
        borderRadius: 15,
        backgroundColor: '#FFB97D'
    }

})