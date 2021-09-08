import { StatusBar } from 'expo-status-bar';
import React, { useState, Component, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomPopup from './ModalMydog';
import { Avatar } from 'react-native-paper';
import ModalPopup from '../../component/ModalPopup';

import Pickerdog from '../../component/Picker';
import Pickersex from '../../component/Pickersex';
import MyDatePicker from '../../component/DatePicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



export default function testtest({ route }) {
    const [isshow, setIsshow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [udata, setUdata] = useState([]);
    const [user, setValue] = useState([]);
    const [dogdata, setDogdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [udogid, setUdogid] = useState();
    const [getudog, setGetudog] = useState();


    useEffect(() => {
        AsyncStorage.getItem('id')
            .then((value) => {
                setValue(value);
            })
        AsyncStorage.getItem('udogid')
            .then((value) => {
                setUdogid(value);
            })
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showudogid.php', {
                    params: {
                        id: user,
                        udogid: getudog
                    }
                })
                setUdata(response.data);
                setIsLoading(true);
            } catch {
                alert("ERROR------showudogid.php.php")
            }
        }
        fetchData();
    })


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/getudogid.php', {
                    params: {
                        id: user
                    }
                })
                setGetudog(response.data);
            } catch {
                alert("ERROR------getudogid.php")
            }
        }
        fetchData();
    }, [getudog])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
                    {
                        params: {
                            id: user,
                            udogid:udogid
                        }
                    })
                setDogdata(response.data);
            } catch {
                alert("ERROR------getudogid.php")
            }
        }
        fetchData();
    }, [udogid])


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

                        <Text style={styles.popupFont}>กำลังดำเนินการ</Text>
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
                        <TouchableOpacity onPress={() => setVisible2(false)}>
                            <Icon
                                name='close'
                                size={15}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                        <Text style={styles.popupFont}>ความสำเร็จ</Text>
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


            {!isLoading ? (
                <View style={{ flex: 1, fontSize: 100 }}>
                    <Text>Loading .. </Text>
                </View>
                // If there is a delay in data, let's let the user know it's loading
            ) : (

                <>
                    {udata == 'null' ? (
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 50 }}>คุณยังไม่มีสุนัข กรุณาเพิ่มสุนัขของคุณ</Text>
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
                                                            <TouchableOpacity onPress={() => setIsshow(true)}>
                                                                <Icon
                                                                    name='swap'
                                                                    size={15}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%', paddingLeft: 20, justifyContent: 'center' }}>
                                                                <Image
                                                                    style={{ width: 90, height: 90 }}
                                                                    source={{ uri: item.udogimg }}
                                                                />
                                                            </View>
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ชื่อ {udogid} </Text>
                                                                <TextInput
                                                                    value={item.udogname}
                                                                    style={{
                                                                        borderBottomWidth: 0.5,
                                                                        width: '80%'
                                                                    }}

                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%' }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>สายพันธุ์</Text>
                                                                <Text style={{ fontSize: 16 }}> {item.udogbreed}</Text>

                                                            </View>
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>เพศ</Text>
                                                                <Pickersex></Pickersex>
                                                            </View>
                                                        </View>
                                                        <View style={styles.rowcontent}>
                                                            <View style={{ width: '60%', justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>วันเกิด</Text>
                                                                <MyDatePicker></MyDatePicker>
                                                            </View>
                                                            <View style={{ width: '40%', justifyContent: 'center', }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>อายุ</Text>
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
                                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ระดับฝึกฝน : </Text>
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

                                                        <TouchableOpacity onPress={() => setVisible(true)}>
                                                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>กำลังดำเนินการ</Text>
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
                                                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>ความสำเร็จ</Text>
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

                            <Text style={styles.popupFont}>กำลังดำเนินการ</Text>
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

                            <Text style={styles.popupFont}>ความสำเร็จ</Text>
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
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ชื่อ</Text>
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
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>สายพันธุ์</Text>
                                        <Pickerdog></Pickerdog>
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>เพศ</Text>
                                        <Pickersex></Pickersex>
                                    </View>
                                </View>
                                <View style={styles.rowcontent}>
                                    <View style={{ width: '60%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>วันเกิด</Text>
                                        <MyDatePicker></MyDatePicker>
                                    </View>
                                    <View style={{ width: '40%', justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>อายุ</Text>
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
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>ระดับฝึกฝน : </Text>
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
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>กำลังดำเนินการ</Text>
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
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 10 }}>ความสำเร็จ</Text>
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
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
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
