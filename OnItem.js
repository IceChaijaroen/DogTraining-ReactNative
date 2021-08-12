import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default OnItem = ({ item }) => {

    const { width } = useWindowDimensions();

    let [fontsLoaded] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
        'bahnschrift': require('./assets/fonts/bahnschrift.ttf'),
        'FC_Iconic': require('./assets/fonts/FC_Iconic_Bold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (

            <View style={[styles.container, {width}]}>

                <Image
                    source={{ uri: item.trainimg }}
                    style={{
                        width: '50%',
                        height: '50%'
                    }}
                />


                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text>{item.gifname} </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'grey'
    },
    headercontainer: {
        width: '100%',
        height: '27%',
    },
    header: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#30475E',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        elevation: 5,
        justifyContent: 'center',
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#676767'
    },
    capsule: {
        width: '90%',
        height: 15,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    incapsule: {
        width: '75%',
        height: 10,
        borderRadius: 15,
        backgroundColor: '#FFB97D',
        marginLeft: 3
    },
    card: {
        width: '90%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 25,
        elevation: 5,
        marginBottom: 5,

    },
    minicardcontainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: '5%',
        height: 90
    },
    minicard: {
        width: '90%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        elevation: 10,
        alignItems: 'center'
    },
    subtextcontainer: {
        width: '60%',
        alignItems: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtext: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#676767'
    },
    image: {
        justifyContent: 'center'
    }
});


