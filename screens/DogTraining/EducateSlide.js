import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { SliderBox } from "react-native-image-slider-box";
import { Component } from 'react';

const Tab = createBottomTabNavigator();

export default class EducateSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                // Network image
                require('../../img/39-512.png'),
                require('../../img/depositphotos_384850210-stock-illustration-professional-dog-training-icon-isometric.png'),          // Local image
            ], 
        };
    }
    render() {
        return (
            <>
                {/** -----------Header------------------ */}
                    <SliderBox inactiveDotColor="#90A4AE" dotColor="#30475E" dotStyle={{marginLeft: -200,width: 8,height: 8,}} style={{width: 200, height:200}} images={this.state.images}  />
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
    imgstyle:{
        width:40,
        height:40
    }
});
