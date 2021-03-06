import { StatusBar } from 'expo-status-bar';
import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import IconImg from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomPopup from './ModalMydog';
import { Avatar } from 'react-native-paper';
import ModalPopup from '../../component/ModalPopup';

import Pickerdog from '../../component/Picker';
import Pickersex from '../../component/Pickersex';
import DatePicker from 'react-native-datepicker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Progress from '../../component/Progress';
import ProgressCircle from 'react-native-progress-circle'
import { Picker } from '@react-native-community/picker';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


const numColumns = 3

export default function testtest({ navigation, route }) {
    const [isshow, setIsshow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [successPopup, setSuccess] = useState(false);
    const [FailPopup, setFail] = useState(false);
    const [udata, setUdata] = useState([]);
    const [user, setValue] = useState([]);
    const [dogdata, setDogdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [udogid, setUdogid] = useState();
    const [getudog, setGetudog] = useState();
    const [train, setTrain] = useState([]);
    const [sex, setSex] = useState('');
    const [birthday, setBirthday] = useState();
    const [age, setAge] = useState();
    const [name, setName] = useState();
    const [breed, setBreed] = useState();
    const [sexpic, setSexpic] = useState(['?????????', '????????????']);
    const [dogbreed, setDogbreed] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [del, setDel] = useState(false);
    const [sure, setSure] = useState(false);
    const [deldone, setDeldone] = useState(false);

    const [image, setImage] = useState();
    const [dognull, setDognull] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            await AsyncStorage.getItem('id')
                .then((value) => {
                    setValue(value);
                })
        }
        fetchData();
    })


    useEffect(() => {
        const fetchData = async () => {
            await AsyncStorage.getItem('udogid')
                .then((value) => {
                    setUdogid(value);
                })
        }
        fetchData();
    })


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
                {
                    params: {
                        id: user,
                        udogid: udogid
                    }
                })
            setIsLoading(true);
            setDognull(response.data);
            setDogdata(response.data.all);
            setSex(response.data.sex);
            setBirthday(response.data.bd);
            setName(response.data.name);
            setBreed(response.data.breed);
            setImage(response.data.img);

        }
        fetchData();
    }, [udogid])


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
                {
                    params: {
                        id: user,
                        udogid: udogid
                    }
                })
            if (response.data == null) {
                setIsLoading(true);
            } else {
                setAge(response.data.age);
            }
        }
        fetchData();
    })

    useEffect(() => {
        const Dogbreed = async () => {
            try {
                const res = await axios.get('http://35.187.253.40/admin/doginfo.php')
                setDogbreed(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        Dogbreed();
    }, [dogbreed])



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showdogtrain.php', {
                    params: {
                        uid: user,
                        udogid: udogid
                    }
                })
                if (response.data == 'null') {
                    console.log("train null");
                } else {
                    setTrain(response.data);
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [train])


    useEffect(() => {
        const authenticate = async () => {
            axios.post("http://35.187.253.40/editudog.php",
                JSON.stringify({
                    udogid: udogid,
                    name: name,
                    breed: breed,
                    sex: sex,
                    birthday: birthday,
                    img: image
                })
            )
                .then((response) => {
                    setSuccess(true);
                    setConfirm(false);
                })
                .catch((err) => {
                    setFail(true);
                });
        }; if (confirm) authenticate();
    }, [confirm]);


    useEffect(() => {
        const authenticate = async () => {
            axios.get("http://35.187.253.40/deletedog.php", {
                params: {
                    udogid: udogid
                }
            })
                .then((response) => {
                    setDeldone(true);
                    setDel(false);
                })
                .catch((err) => {
                    console.log(err)
                });
        }; if (del) authenticate();
    }, [del]);




    let formatData = (train, numColumns) => {
        const totalRows = Math.floor(train.length / numColumns)
        let totalLastRow = train.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            train.push({ idtrain: 'blank', empty: true })
            totalLastRow++
        }
        return train
    }


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
            setImage(base + base64);
        }
    };
    //-----------------------------------------------------------------------------------------------



    const inprogress = ({ item, index }) => {
        if (item.empty) {
            return (
                <View style={{ backgroundColor: 'transparent' }}>
                </View>)
        } else {
            if (item.sumstep == null) {
                return (
                    <View style={{ backgroundColor: 'transparent' }}>
                    </View>
                )
            } else {
                if (item.sumstep < 20) {
                    return (
                        <>
                            <View style={{ width: 80, height: 110, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                                <ProgressCircle
                                    percent={item.sumstep * 100 / 20}
                                    radius={40}
                                    borderWidth={4}
                                    color="#FFBE4F"
                                    shadowColor="#B8B8B8"
                                    bgColor='#FFFFFF'
                                >
                                    <Image
                                        style={{
                                            width: '50%',
                                            height: '50%'
                                        }}
                                        source={{ uri: item.trainimg }}
                                    />

                                </ProgressCircle>
                                <View style={{ width: '100%', height: 20, alignItems: 'center' }}>
                                    <Text style={{ color: '#555555', fontSize: 20, textAlign: 'center', fontFamily: 'FC_Iconic', paddingTop: 5 }}>{item.trainname}</Text>
                                </View>
                            </View>
                        </>
                    )
                } else {
                    return (
                        <>

                        </>
                    )

                }

            }
        }
    }


    const success = ({ item, index }) => {
        if (item.empty) {
            return <View style={{ backgroundColor: 'transparent' }}></View>
        } else {
            if (item.sumstep < 1) {
                return <View style={{ backgroundColor: 'transparent' }}></View>
            } else {
                return (
                    <View style={{ width: 80, height: 110, alignItems: 'center', justifyContent: 'center', margin: 10 }}>

                        <ProgressCircle
                            percent={item.sumstep * 100 / 20}
                            radius={40}
                            borderWidth={4}
                            color="#79E386"
                            shadowColor="#B8B8B8"
                            bgColor='#FFFFFF'
                        >
                            <Image
                                style={{
                                    width: '50%',
                                    height: '50%'
                                }}
                                source={{ uri: item.trainimg }}
                            />

                        </ProgressCircle>
                        <View style={{ width: '100%', height: 20, alignItems: 'center' }}>
                            <Text style={{ color: '#555555', fontSize: 16, textAlign: 'center', fontFamily: 'FC_Iconic', paddingTop: 5 }}>{item.trainname}</Text>
                        </View>

                    </View>
                )
            }
        }
    }
    {/**  
         axios.get('http://35.187.253.40/showuserdog.php',
            {
                params: {
                    id: user
                }
            })
            .then(response => {
                setDogdata(response.data);
            })
            .catch(err => {
                console.log(err)
            })
            */
    }


    const close = () => {
        setIsshow(false);
    }


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
                        <Icon
                            name={'checkcircle'}
                            size={120}
                            color={'#79E386'}

                        />
                    </View>
                    <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>??????????????????????????????????????????????????????????????? </Text>
                    </View>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setSuccess(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>??????????????????</Text>
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
                        <Icon
                            name={'checkcircle'}
                            size={120}
                            color={'#79E386'}

                        />
                    </View>
                    <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>??????????????????????????????????????????????????????????????? </Text>
                    </View>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setFail(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>??????????????????</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalinsertdog>



            <Modalinsertdog visible={sure}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    height: 350,
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                    <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name={'questioncircle'}
                            size={120}
                            color={'#FFC372'}

                        />
                    </View>
                    <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>?????????????????????????????????????????????????????????????????? </Text>
                    </View>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setSure(false)} style={{ width: '40%', height: '80%', backgroundColor: '#FF7E7E', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>??????????????????</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDel(true); setSure(false) }} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>??????????????????</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalinsertdog>


            <Modalinsertdog visible={deldone}>
                <View style={{
                    width: '100%',
                    alignItems: 'center',
                    height: 350,
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                    <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon
                            name={'checkcircle'}
                            size={120}
                            color={'#79E386'}

                        />
                    </View>
                    <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>??????????????????????????????????????????????????? </Text>
                    </View>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setDeldone(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                            <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>??????????????????</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalinsertdog>




            <ModalPopup visible={visible}>
                <View style={styles.PopupHeader}>
                    <View style={styles.popClose}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Icon
                                name='close'
                                size={15}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <Text style={styles.popupFont}>??????????????????????????????????????????</Text>
                    </View>
                </View>
                <View style={styles.PopupContent}>

                    <FlatList
                        data={formatData(train, numColumns)}
                        renderItem={inprogress}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />

                </View>
            </ModalPopup>


            <ModalPopup visible={visible2}>
                <View style={styles.PopupHeader}>
                    <View style={styles.popClose}>
                        <TouchableOpacity onPress={() => setVisible2(false)}>
                            <Icon
                                name='close'
                                size={15}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <Text style={styles.popupFont}>??????????????????????????????</Text>
                    </View>
                </View>
                <View style={styles.PopupContent}>

                    <FlatList
                        data={formatData(train, numColumns)}
                        renderItem={success}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />

                </View>
            </ModalPopup>


            {!isLoading ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#FFB97D" />
                </View>
                // If there is a delay in data, let's let the user know it's loading
            ) : (

                <>
                    {!dogdata ? (
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => navigation.navigate('AddDog')} style={styles.cardinsert}>

                                <View style={{ width: '80%', height: '50%', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10 }}>
                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#555555' }}>????????????????????????????????????????????????</Text>
                                </View>
                                <View style={{ width: '80%', height: '50%', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Icon
                                        name={'pluscircle'}
                                        size={50}
                                        color={'#555555'}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>
                    ) : (
                        <View>

                            <FlatList
                                data={dogdata}
                                renderItem={
                                    ({ item }) => (

                                        <ScrollView>
                                            <View style={styles.container}>
                                                <View style={styles.card}>
                                                    <View style={{ padding: 30, width: '90%' }}>
                                                        <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                                            {sex != item.udogsex || birthday != item.udogbd || name != item.udogname || breed != item.udogbreed || image != item.udogimg ? (
                                                                <>
                                                                    <TouchableOpacity onPress={() => { setConfirm(true); }} style={{ width: 200, flexDirection: 'row', height: 25, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                                        <View style={{ width: '50%', alignItems: 'flex-end' }}>
                                                                            <Text style={{ color: 'green', fontFamily: 'FC_Iconic', fontSize: 24 }}>??????????????????</Text>
                                                                        </View>

                                                                        <View style={{ width: '20%', marginLeft: 5 }}>
                                                                            <Icon
                                                                                name='checkcircle'
                                                                                color={'green'}
                                                                                size={25}
                                                                            />
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </>

                                                            ) : (
                                                                <>
                                                                    <TouchableOpacity onPress={() => { setSure(true); }} style={{ width: 200, flexDirection: 'row', height: 25, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                                        <View style={{ width: '20%', marginLeft: 5 }}>
                                                                            <Icon
                                                                                name='delete'
                                                                                color={'red'}
                                                                                size={20}
                                                                            />
                                                                        </View>
                                                                    </TouchableOpacity>

                                                                </>
                                                            )}


                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%', paddingLeft: 20, justifyContent: 'center' }}>
                                                                {image == null ? (
                                                                    <>
                                                                        <TouchableOpacity style={{ width: 90, height: 90, borderRadius: 50, backgroundColor: '#EBEBEB', justifyContent: 'center', alignItems: 'center' }} onPress={pickImage}>

                                                                            <IconImg
                                                                                name='image'
                                                                                color={'grey'}
                                                                                size={20}
                                                                            />
                                                                            <Text style={{ fontSize: 16, fontFamily: 'FC_Iconic', color: '#555555' }}>?????????????????????????????????</Text>

                                                                        </TouchableOpacity>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={pickImage}>
                                                                            <View style={{ width: 90, height: 90 }}>
                                                                                <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 50 }} />
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
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic' }}>???????????????????????????</Text>
                                                                <TextInput
                                                                    value={name}
                                                                    onChangeText={text => setName(text)}
                                                                    style={{
                                                                        color: '#555555',
                                                                        fontFamily: 'FC_Iconic',
                                                                        borderBottomWidth: 0.5,
                                                                        width: '80%',
                                                                        fontSize: 22
                                                                    }}

                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%' }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic', marginBottom: 10 }}>???????????????????????????</Text>

                                                                <Picker style={{ width: '80%', fontFamily: 'FC_Iconic', color: '#555555' }}
                                                                    selectedValue={breed}
                                                                    onValueChange={(itemValue) => setBreed(itemValue)}
                                                                >
                                                                    {dogbreed.map((item, key) => (
                                                                        <Picker.Item label={item.dogname} value={item.dogname} key={key}></Picker.Item>
                                                                    ))}

                                                                </Picker>

                                                            </View>
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic' }}>????????? </Text>
                                                                <Picker style={{ width: '80%', fontFamily: 'FC_Iconic', color: '#555555' }}
                                                                    selectedValue={sex}
                                                                    onValueChange={(itemValue) => setSex(itemValue)}
                                                                >
                                                                    {sexpic.map((item, key) => (
                                                                        <Picker.Item label={item} value={item} key={key}></Picker.Item>
                                                                    ))}

                                                                </Picker>
                                                            </View>
                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic' }}>?????????????????????</Text>
                                                                <DatePicker
                                                                    style={{ width: '80%' }}
                                                                    date={birthday}
                                                                    mode="date"
                                                                    placeholder="select date"
                                                                    format="YYYY-MM-DD"
                                                                    minDate="-10Y"
                                                                    maxDate={new Date()}
                                                                    confirmBtnText="Confirm"
                                                                    cancelBtnText="Cancel"
                                                                    customStyles={{
                                                                        dateIcon: {
                                                                            position: 'relative',
                                                                            left: 0,
                                                                            top: 0,
                                                                            marginLeft: 0
                                                                        },
                                                                        dateInput: {
                                                                            marginLeft: 0
                                                                        }
                                                                        // ... You can check the source to find the other keys.
                                                                    }}
                                                                    onDateChange={(date) => setBirthday(date)}
                                                                />
                                                            </View>
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic' }}>????????????</Text>
                                                                {birthday == null ? (
                                                                    <>
                                                                        <Text style={{ fontSize: 22, color: '#555555', fontFamily: 'FC_Iconic' }}>?????????????????????????????????????????????????????????????????????</Text>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        {age == '51 ??????  9 ???????????????' ? (
                                                                            <>
                                                                                <Text style={{ fontSize: 22, color: '#555555', fontFamily: 'FC_Iconic' }}>?????????????????????????????????????????????????????????????????????</Text>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {age == '' ? (
                                                                                    <>
                                                                                        <Text style={{ fontSize: 22, color: '#555555', fontFamily: 'FC_Iconic' }}>???????????????????????? 1 ???????????????</Text>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <Text style={{ fontSize: 24, color: '#555555', fontFamily: 'FC_Iconic' }}>{age}</Text>
                                                                                    </>
                                                                                )}

                                                                            </>
                                                                        )}

                                                                    </>
                                                                )}


                                                            </View>
                                                        </View>


                                                        {/**------------------------------------------------------------------------------------------- */}
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                            <View>
                                                            </View>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                        </View>
                                                        {/**------------------------------------------------------------------------------------------- */}


                                                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                                            <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic' }}>?????????????????????????????? : </Text>
                                                            <View style={{ width: '50%' }}>
                                                                <Progress step={item.udogprocess} steps={200} height={15} />
                                                            </View>
                                                        </View>


                                                        {/**------------------------------------------------------------------------------------------- */}
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                            <View>
                                                            </View>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                        </View>
                                                        {/**------------------------------------------------------------------------------------------- */}

                                                        <TouchableOpacity onPress={() => setVisible(true)}>
                                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic', marginRight: 10 }}>??????????????????????????????????????????</Text>
                                                                <MaterialCommunityIcons
                                                                    name='arrow-right-drop-circle'
                                                                    size={15}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>

                                                        {/**------------------------------------------------------------------------------------------- */}
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                            <View>
                                                            </View>
                                                            <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                                        </View>
                                                        {/**------------------------------------------------------------------------------------------- */}

                                                        <TouchableOpacity onPress={() => setVisible2(true)}>
                                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: 26, fontFamily: 'FC_Iconic', marginRight: 10 }}>??????????????????????????????</Text>
                                                                <Image
                                                                    source={require('../../img/pngtree-gold-trophy-icon-trophy-icon-winner-icon-png-image_1692648.jpg')}
                                                                    style={{
                                                                        width: 30,
                                                                        height: 30
                                                                    }}
                                                                />
                                                                <MaterialCommunityIcons
                                                                    name='arrow-right-drop-circle'
                                                                    size={15}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </ScrollView>

                                    )}
                            />


                            <BottomPopup
                                show={isshow}
                                title={"something"}
                                animationType={"fade"}
                                closePopup={close}
                                data={dogdata}
                                haveOutsideTouch={true}
                            />
                        </View>

                    )}
                </>
            )}


        </>
    );
}

{/** */ }
class MydogInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            visible: false,
            visible2: false
        };
    }

    close = () => {
        this.setState({
            isShow: false
        })
    }


    render() {
        const { isShow } = this.state;
        const { visible } = this.state;
        const { visible2 } = this.state;
        return (
            <>

                <ModalPopup visible={visible}>
                    <View style={styles.PopupHeader}>
                        <View style={styles.popClose}>
                            <TouchableOpacity onPress={() => this.setState({
                                visible: false
                            })}>
                                <Icon
                                    name='close'
                                    size={15}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                            <Text style={styles.popupFont}>??????????????????????????????????????????</Text>
                        </View>
                    </View>
                    <View style={styles.PopupContent}>

                        <Image
                            source={require('../../img/pet_robot_technology_dog_future_modern_science_machine-512.png')}
                            style={{ width: 60, height: 60, marginRight: 30 }}
                        />
                        <Image
                            source={require('../../img/corgi-512.png')}
                            style={{ width: 60, height: 60, marginRight: 30 }}
                        />
                        <Image
                            source={require('../../img/003-dog.png')}
                            style={{ width: 60, height: 60, marginRight: 20 }}
                        />

                    </View>
                </ModalPopup>


                <ModalPopup visible={visible2}>
                    <View style={styles.PopupHeader}>
                        <View style={styles.popClose}>
                            <TouchableOpacity onPress={() => this.setState({
                                visible2: false
                            })}>
                                <Icon
                                    name='close'
                                    size={15}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                            <Text style={styles.popupFont}>??????????????????????????????</Text>
                        </View>
                    </View>
                    <View style={styles.PopupContent}>

                        <Image
                            source={require('../../img/pet_robot_technology_dog_future_modern_science_machine-512.png')}
                            style={{ width: 60, height: 60, marginRight: 30 }}
                        />
                        <Image
                            source={require('../../img/corgi-512.png')}
                            style={{ width: 60, height: 60, marginRight: 30 }}
                        />
                        <Image
                            source={require('../../img/003-dog.png')}
                            style={{ width: 60, height: 60, marginRight: 20 }}
                        />

                    </View>
                </ModalPopup>



                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <View style={{ padding: 30, width: '90%' }}>
                                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => {
                                        this.setState({
                                            isShow: !this.state.isShow
                                        })
                                    }}>
                                        <Icon
                                            name='swap'
                                            size={15}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.rowcontent}>
                                    <View style={{ width: '60%', paddingLeft: 30, justifyContent: 'center' }}>
                                        <Image
                                            style={{ width: 50, height: 50 }}
                                            source={require('../../img/dog.png')}
                                        />
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>????????????</Text>
                                        <TextInput
                                            style={{
                                                borderBottomWidth: 0.5,
                                                width: '80%'
                                            }}

                                        />
                                    </View>
                                </View>
                                <View style={styles.rowcontent}>
                                    <View style={{ width: '60%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>???????????????????????????</Text>
                                        <Pickerdog></Pickerdog>
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>?????????</Text>
                                        <Pickersex></Pickersex>
                                    </View>
                                </View>
                                <View style={styles.rowcontent}>
                                    <View style={{ width: '60%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>?????????????????????</Text>
                                        <MyDatePicker></MyDatePicker>
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>????????????</Text>
                                        <Text style={{ fontSize: 20, color: 'red' }}>Empty</Text>
                                    </View>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                    <View>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}


                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>?????????????????????????????? : </Text>
                                    <View style={styles.capsule}>
                                        <View style={styles.incapsule}></View>
                                    </View>
                                </View>


                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                    <View>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}

                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        visible: true
                                    })
                                }}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>??????????????????????????????????????????</Text>
                                        <MaterialCommunityIcons
                                            name='arrow-right-drop-circle'
                                            size={15}
                                        />
                                    </View>
                                </TouchableOpacity>

                                {/**------------------------------------------------------------------------------------------- */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                    <View>
                                    </View>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#E3E3E3', marginTop: 20, marginBottom: 20 }} />
                                </View>
                                {/**------------------------------------------------------------------------------------------- */}

                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        visible2: true
                                    })
                                }}>
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>??????????????????????????????</Text>
                                        <Image
                                            source={require('../../img/pngtree-gold-trophy-icon-trophy-icon-winner-icon-png-image_1692648.jpg')}
                                            style={{
                                                width: 30,
                                                height: 30
                                            }}
                                        />
                                        <MaterialCommunityIcons
                                            name='arrow-right-drop-circle'
                                            size={15}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <BottomPopup
                    show={isShow}
                    title={"something"}
                    animationType={"fade"}
                    closePopup={this.close}
                    data={udata}
                    haveOutsideTouch={true}
                />

            </>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        marginTop: 10,
        marginBottom: 80,
    },
    card: {
        alignItems: 'center',
        width: '90%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    cardinsert: {
        alignItems: 'center',
        width: '90%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 50,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    rowcontent: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    capsule: {
        width: '60%',
        height: 20,
        borderRadius: 15,
        backgroundColor: '#F5F5F5'
    },
    incapsule: {
        width: '50%',
        height: 20,
        borderRadius: 15,
        backgroundColor: '#FFB97D'
    },
    popupFont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    popClose: {
        alignItems: 'flex-end',
        width: '100%',
    },
    PopupHeader: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#555555',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        height: '15%'
    },
    PopupContent: {
        width: '100%',
        justifyContent: 'center',
        height: 500,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row'
    }

});
