import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, Animated } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SliderBox } from "react-native-image-slider-box";


const Top = createMaterialTopTabNavigator();
export const NetworkContext = React.createContext();

const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function testslide({ route, navigation }) {
    const path = ['01.jpg', '02.jpg', '03.jpg'];
    const [info, setInfo] = useState([]);
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://35.187.253.40/showsingle.php',
                    {
                        params: {
                            id: 1
                        }
                    })
                setInfo(response.data)
            } catch (err) {
                alert(err)
            }
        }
        fetchData();
    }, info)



    const images = info.map(item => (
        item.habit
    ))

    const showpath = path.map(item => (
        images + item
    ))




    return (
        <>
            {/** -----------Header------------------ */}
            <View style={{ width: '100%', height: '35%' }}>
                <View style={{ height: '100%', backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>

                    {/**-----------------------------------------Picture Slice ----------------------------------------------------------------------------------- */}
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ScrollView
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                            )}
                            horizontal={true}
                            style={{
                                width,
                                height
                            }}>
                            {path.map((item, index) => (
                                <TouchableOpacity onPress={() => navigation.navigate('testdata2', { id: item.id })} style={{ width, height }}>
                                    <Image
                                        key={index}
                                        style={{
                                            width: '100%',
                                            height: '100%'
                                        }}
                                        source={{ uri: images + item }}
                                    />
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                        <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                            {path.map((i, k) => {
                                let opacity = position.interpolate({
                                    inputRange: [k - 1, k, k + 1],
                                    outputRange: [0.3, 1, 0.3],
                                    extrapolate: 'clamp'
                                })
                                return (
                                    <Animated.View key={k} style={{ opacity, height: 10, width: 10, backgroundColor: 'black', borderRadius: 20, margin: 5 }} />
                                )
                            })}
                        </View>
                    </View>
                    {/**------------------------------------------------------------------------------------------------------------------------------------------- */}



                    {/**---------------------------------------------------------------Arrow Left -------------------------------------------------------------------- */}
                    <View style={{ width: '100%', height: '20%', position: 'absolute', top: 30 }}>
                        <TouchableOpacity style={{ width: '100%', height: '100%', alignItems: 'flex-start' }} onPress={() => navigation.goBack()}>
                            <Icon
                                style={{ marginLeft: 10 }}
                                name="arrow-left"
                                size={25}
                                color={'white'}

                            />
                        </TouchableOpacity>
                    </View>
                    {/**---------------------------------------------------------------------------------------------------------------------------------------------- */}

                </View>


                {/**
            <ImageBackground
                style={{width:'100%',height:'100%',alignItems:'center'}}
                source={require('../../img/Georgie-web.jpg')}
            >
                <View style={{width:'95%',height:'20%',justifyContent:'center',marginTop:20}}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('Tabs')}}>
                        <Icon 
                            name="arrow-left"
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'flex-end',width:'90%',height:'70%'}}>
                    <TouchableOpacity 
                        style={{width:'100%',height:'100%',justifyContent:'flex-end'}} 
                    >
                        <View style={{width:'30%',height:'30%',justifyContent:'center'}}>
                            <Image 
                                style={{width:'25%',height:'50%'}}
                                source={require('../../img/WhiteStar.png')} 
                            />
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </ImageBackground> */}

            </View>

            <View style={{ width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <FlatList
                        data={info}
                        keyExtractor={item => item.iddoginfo}
                        renderItem={({ item }) => (
                            <Text key={item} style={styleinfo.headfont}>
                                {item.dogname}
                            </Text>
                        )}
                    />
                </View>




            </View>
            {/** -----------Header------------------ */}


        </>
    );

}

const styleinfo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    frame: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headfont: {
        fontSize: 35,
        color: '#636262',
        marginLeft: 20,
        fontFamily: 'FC_Iconic',
        textAlign: 'center'
    },

});
