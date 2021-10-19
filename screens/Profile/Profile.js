import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationActions } from 'react-navigation';
import IconImg from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function Profile({ navigation }) {
    const [udata, setUdata] = useState([]);
    const [user, setValue] = useState();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [img, setImg] = useState();
    const [email, setEmail] = useState();
    const [confirm, setConfirm] = useState(false);
    const [successPopup, setSuccess] = useState(false);
    const [FailPopup, setFail] = useState(false);


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
                        setUdata(response.data.all);
                        setName(response.data.name);
                        setLastname(response.data.lastname);
                        setUsername(response.data.username);
                        setImg(response.data.img);
                        setEmail(response.data.email);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
    }, [user])

    useEffect(() => {
        const authenticate = async () => {
            axios.post("http://35.187.253.40/edituser.php",
                JSON.stringify({
                    id: user,
                    name: name,
                    lastname: lastname,
                    username: username,
                    img: img,
                    email: email
                })
            )
                .then((response) => {
                    setSuccess(true);
                    setConfirm(false);
                })
                .catch((err) => {
                    setFail(true)
                });
        }; if (confirm) authenticate();
    }, [confirm]);


    //------------------------------------Image Picker-------------------------------------------
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
        const base = 'data:image/jpeg;base64,'
        if (!result.cancelled) {
            setImg(base + base64);
        }
    };
    //-----------------------------------------------------------------------------------------------
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

                <Modalinsertdog visible={successPopup}>
                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        height: 350,
                        paddingHorizontal: 20,
                        paddingVertical: 20
                    }}>
                        <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign
                                name={'checkcircle'}
                                size={120}
                                color={'#79E386'}

                            />
                        </View>
                        <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>บันทึกข้อมูลเสร็จสิ้น </Text>
                        </View>
                        <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setSuccess(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ยืนยัน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modalinsertdog>

                <Modalinsertdog visible={FailPopup}>
                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        height: 350,
                        paddingHorizontal: 20,
                        paddingVertical: 20
                    }}>
                        <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign
                                name={'checkcircle'}
                                size={120}
                                color={'#79E386'}

                            />
                        </View>
                        <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>บันทึกข้อมูลไม่สำเร็จ </Text>
                        </View>
                        <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => setFail(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ยืนยัน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modalinsertdog>



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
                            <Text style={{ marginLeft: 15, fontSize: 28, color: 'white', fontFamily: 'FC_Iconic' }}>ข้อมูลผู้ใช้</Text>
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
                                            {img == null ? (
                                                <>
                                                    <TouchableOpacity style={{ width: 90, height: 90, borderRadius: 50, backgroundColor: '#EBEBEB', justifyContent: 'center', alignItems: 'center' }} onPress={pickImage}>

                                                        <IconImg
                                                            name='image'
                                                            color={'grey'}
                                                            size={20}
                                                        />
                                                        <Text style={{ fontSize: 20, fontFamily: 'FC_Iconic', color: '#555555' }}>เลือกรูปภาพ</Text>

                                                    </TouchableOpacity>
                                                </>
                                            ) : (
                                                <>
                                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={pickImage}>
                                                        <View style={{ width: 90, height: 90 }}>
                                                            <Image source={{ uri: img }} style={{ width: 90, height: 90, borderRadius: 50 }} />
                                                        </View>
                                                        <View style={{ width: 20, height: 90, justifyContent: 'flex-end', marginLeft: -15 }}>
                                                            <View style={{ width: 30, height: 30, backgroundColor: '#EBEBEB', borderRadius: 50, marginLeft: -15, justifyContent: 'center', alignItems: 'center', opacity: 0.9 }}>
                                                                <IconImg
                                                                    name='image'
                                                                    color={'grey'}
                                                                    size={15}
                                                                />
                                                            </View>

                                                        </View>

                                                    </TouchableOpacity>
                                                </>
                                            )}
                                        </View>
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                            <Text style={{ fontFamily: 'FC_Iconic', fontSize: 28, color: '#555555' }}>ข้อมูลผู้ใช้</Text>
                                        </View>


                                        {/**------------------------------------------------------------------------------------------- */}
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                                            <View style={{ flex: 1, height: 2, backgroundColor: '#ECECEC', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
                                        </View>
                                        {/**------------------------------------------------------------------------------------------- */}


                                        <View style={{ width: '75%', height: 65, flexDirection: 'row', justifyContent: 'center' }}>
                                            <View style={{ width: '50%' }}>
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 24, height: 25 }}>ชื่อ</Text>
                                                <TextInput
                                                    style={{
                                                        borderBottomWidth: 0.5,
                                                        width: '80%',
                                                        height: 30
                                                    }}
                                                    onChangeText={setName}
                                                    value={name}
                                                    placeholder="Name"
                                                />
                                            </View>
                                            <View style={{ width: '50%' }}>
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 24, height: 25 }}>นามสกุล</Text>
                                                <TextInput
                                                    style={{
                                                        borderBottomWidth: 0.5,
                                                        width: '80%',
                                                        height: 30
                                                    }}
                                                    onChangeText={setLastname}
                                                    value={lastname}
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
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 24, height: 35 }}>ขื่อผู้ใช้</Text>
                                                <TextInput
                                                    style={{
                                                        borderBottomWidth: 0.5,
                                                        width: '80%',
                                                        height: 30
                                                    }}
                                                    onChangeText={setUsername}
                                                    value={username}
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
                                            <View style={{ width: '100%' }}>
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 24, height: 35 }}>อีเมล </Text>
                                                <TextInput
                                                    style={{
                                                        borderBottomWidth: 0.5,
                                                        width: '80%',
                                                        height: 30
                                                    }}
                                                    onChangeText={setEmail}
                                                    value={email}
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


                                        <View style={{ width: '100%', height: 60, justifyContent: 'center' }}>
                                            <View style={{ width: '100%' }}>
                                                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, height: '50%' }}>Change Password</Text>
                                                <View style={{ width: '100%', height: '50%', flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image
                                                        source={require('../../img/145802.png')}
                                                        style={{
                                                            width: '9.5%',
                                                            height: '100%'
                                                        }}
                                                    />
                                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 18, marginLeft: 10 }}>Connected!</Text>
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
                                            <TouchableOpacity onPress={() => { setConfirm(true); }} style={{ width: '80%', height: '75%' }}>
                                                <View style={{ width: '100%', height: '100%', backgroundColor: '#5CC368', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: 'white', fontFamily: 'FC_Iconic', fontSize: 24 }}>บันทึก</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ width: '100%', height: 65, alignItems: 'center', justifyContent: 'center' }}>
                                            <TouchableOpacity onPress={() => { navigation.navigate('Login', AsyncStorage.removeItem('id'), AsyncStorage.removeItem('udogid')) }} style={{ width: '80%', height: '75%' }}>
                                                <View style={{ width: '100%', height: '100%', backgroundColor: '#EA6666', borderRadius: 30, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <Icon
                                                        name='logout'
                                                        size={30}
                                                        color={'white'}
                                                    />
                                                    <Text style={{ color: 'white', fontFamily: 'FC_Iconic', fontSize: 24 }}>ออกจากระบบ</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                )}
                        />
                    </View>
                </View >
            </>);
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
