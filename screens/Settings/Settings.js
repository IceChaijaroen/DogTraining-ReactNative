import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>

            {/* -------------------------------Header----------------------------------------- */}
            <View style={styles.header}>
                <View style={{ width: '90%', flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Icon
                            name="arrow-left"
                            size={30}
                            color={'white'}

                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 20, color: 'white', fontWeight: 'bold' }}>ตั้งค่า</Text>
                </View>
            </View>
            {/* -------------------------------Header----------------------------------------- */}


            <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                <View style={{ width: '80%', height: '30%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#555555' }}>บัญชี</Text>
                </View>
                <View style={{ width: '80%', height: '35%', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: '50%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#B1B1B1' }}>+ เพิ่มสุนัขของคุณ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '80%', height: '35%', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: '30%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#B1B1B1' }}>ข้อมูลผู้ใช้</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: '#E4E4E4', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                <View style={{ flex: 1, height: 2, backgroundColor: '#E4E4E4', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            <View style={{ width: '100%', height: '5%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '30%', justifyContent: 'center' }}>
                    <TouchableOpacity style={{width: '30%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#B1B1B1' }}>ช่วยเหลือ</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1, height: 2, backgroundColor: '#E4E4E4', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
                <View style={{ flex: 1, height: 2, backgroundColor: '#E4E4E4', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            <View style={{ width: '100%', height: '10%', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '80%', height: '50%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#555555' }}>ติดต่อเรา</Text>
                </View>
                <View style={{ width: '80%', height: '50%', justifyContent: 'center' }}>
                    <TouchableOpacity style={{width: '100%' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#B1B1B1' }}>621513002@crru.ac.th</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
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
        height: '10%',
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
