import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import TopTap from './TopTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import { Component } from 'react';

const Tab = createBottomTabNavigator();

export default function Slider() {

    const images = [
        'http://34.87.28.196/images/home.png' ,
        'http://34.87.28.196/images/golden_1.jpg' ,
    ];


    return (
        <>
            <View style={{ marginTop: -56, height: '100%', zIndex: -99, backgroundColor: 'grey' }}>
                {images.map((item, index) => (
                    <SliderBox key={index} sliderBoxHeight={'100%'} images={{uri:item}} />
                ))}
            </View>
        </>
    );
}

class Sliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // Network image
                require('../../img/Georgie-web.jpg'),
                require('../../img/Labrador_Retriever_(1210559).jpg'),          // Local image
            ]
        };
    }
    render() {
        return (
            <>
                {/** -----------Header------------------ */}
                <View style={{ marginTop: -56, height: '100%' }}>
                    <SliderBox sliderBoxHeight={'100%'} images={this.state.images} />
                </View>


            </>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    },

});
