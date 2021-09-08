import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Animated, Alert } from 'react-native';



const data = [
    {
        id: 1,
        url: 'https://everythingcannes.com/wp-content/uploads/2021/02/IU-3.jpg',
        banner: 'Banner 1'
    },
    {
        id: 2,
        url: 'https://www.brighttv.co.th/wp-content/uploads/2021/07/1625707575-20210707-jisoo.jpg',
        banner: 'Banner 2'
    },
    {
        id: 3,
        url: 'https://s.isanook.com/jo/0/ud/480/2401993/iu.jpg',
        banner: 'Banner 2'
    },
    {
        id: 4,
        url: 'https://www.allkpop.com/upload/2021/08/content/100409/1628582984-304895-349785-1442.jpg',
        banner: 'Banner 2'
    },

]

const ban = data.map(item => (
    item.banner
))

const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function testdata2({ navigation }) {

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive({ active: slide });
        }
    }


    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={change}
                        horizontal={true}
                        style={{
                            width,
                            height
                        }}>
                        {data.map((item, index) => (
                            <TouchableOpacity onPress={() => navigation.navigate('testdata2', { id: item.id })} style={{ width, height }}>
                                <Image
                                    key={index}
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    source={{ uri: item.url }}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                        {data.map((i, k) => (
                            <Text key={k} style={k == active ? { margin: 3, color: 'grey' } : { margin: 3, color: 'white' }} >⬤</Text>
                        ))}
                    </View>

                </View>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        height: '100%',
        marginBottom: 5
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
        height: 10,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center'
    },
    incapsule: {
        width: '30%',
        height: 8,
        borderRadius: 15,
        backgroundColor: '#FFB97D',
        marginLeft: 3
    },
    card: {
        width: '90%',
        height: '99%',
        backgroundColor: 'white',
        borderRadius: 40,
        elevation: 5,
        marginBottom: 5
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
    nextbutton: {
        width: '100%',
        backgroundColor: '#555555',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    textinbutton: {
        fontFamily: 'FC_Iconic',
        fontSize: 22,
        color: 'white',
        marginRight: 10
    }
});
