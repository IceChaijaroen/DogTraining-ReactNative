import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';


export default function Profile({ navigation }) {
    const [name, onChangeName] = React.useState("");
    const [lastname, onChangeLastname] = React.useState("");

    const [user, setValue] = useState();
    const [udata, setUdata] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setValue(value);
                axios.get('http://34.87.28.196/showuser.php',
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

    return (
        <View style={styles.container}>

            {/* -------------------------------Header----------------------------------------- */}
            <View style={styles.header}>
                <View style={{ width: '45%', flexDirection: 'row' }}>
                    <TouchableOpacity

                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={30}
                            color={'white'}

                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 20, color: 'white', fontWeight: 'bold' }}>ข้อมูลผู้ใช้</Text>
                </View>
                <View style={{ width: '45%', alignItems: 'flex-end', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Icons
                            name="settings"
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            {/* -------------------------------Header----------------------------------------- */}

            <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                <FlatList
                    data={udata}
                    renderItem={
                        ({ item }) => (
                            <View >
                                <View style={{ width: '100%', height: 160, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{
                                            width: '40%',
                                            height: '75%',
                                            borderRadius: 100
                                        }}
                                    />
                                </View>
                                <View style={{ width: '100%', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#555555' }}>ข้อมูลผู้ใช้</Text>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '75%', height: 65, flexDirection: 'row', justifyContent: 'center' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, height: 25 }}>Name</Text>
                                        <TextInput
                                            style={{
                                                borderBottomWidth: 0.5,
                                                width: '80%',
                                                height: 30
                                            }}
                                            onChangeText={onChangeName}
                                            value={item.name}
                                            placeholder="Name"
                                        />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, height: 25 }}>Lastname</Text>
                                        <TextInput
                                            style={{
                                                borderBottomWidth: 0.5,
                                                width: '80%',
                                                height: 30
                                            }}
                                            onChangeText={onChangeLastname}
                                            value={item.lastname}
                                            placeholder="Lastname"
                                        />
                                    </View>
                                </View>

                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '75%', height: 65, justifyContent: 'center' }}>
                                    <View style={{ width: '50%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, height: 35 }}>Username</Text>
                                        <Text>{item.username}</Text>
                                    </View>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '75%', height: 65, justifyContent: 'center' }}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16, height: 35 }}>Email</Text>
                                        <Text>{item.email}</Text>
                                    </View>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '100%', height: 60, justifyContent: 'center' }}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 14, height: '50%' }}>Change Password</Text>
                                        <View style={{ width: '100%', height: '50%', flexDirection: 'row', alignItems: 'center' }}>
                                            <Image
                                                source={require('../../img/145802.png')}
                                                style={{
                                                    width: '9.5%',
                                                    height: '100%'
                                                }}
                                            />
                                            <Text style={{ fontWeight: 'bold', fontSize: 14, marginLeft: 10 }}>Connected!</Text>
                                        </View>
                                    </View>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                    <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '100%', height: 65, alignItems: 'center', justifyContent: 'center', marginTop: '3%' }}>
                                    <TouchableOpacity style={{ width: '80%', height: '75%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: '#5CC368', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Save</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: '100%', height: 65, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ width: '80%', height: '75%' }}>
                                        <View style={{ width: '100%', height: '100%', backgroundColor: '#EA6666', borderRadius: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon
                                                name='logout'
                                                size={30}
                                                color={'white'}
                                            />
                                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Logout</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        )}
                />
            </View>
        </View >
    );
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
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#555555',
        shadowColor: '#000',
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    notiground: {
        backgroundColor: 'white',
        width: '100%',
        height: '15%',
        borderBottomColor: '#F6F6F6',
        borderBottomWidth: 2
    }
});
