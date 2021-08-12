import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const Images = [
  'http://34.87.28.196/images/home.png',
  'http://34.87.28.196/images/golden_1.jpg',
  'http://34.87.28.196/images/golden_1.jpg'
]



export default function Carousel() {
  const [data, setInfo] = useState([]);
  const [img, setImg] = useState([]);
  const folder = ('golden/');
  const path = ['https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg', 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg'];

  

  return (
    <>
      <View style={{ width: '100%', height: '35%' }}>

        <TouchableOpacity style={{width:'10%',height:'20%',marginTop:30}} onPress={() => navigation.goBack()}>
          <Icon
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={25}
            color={'white'}

          />
        </TouchableOpacity>
        <View style={{ marginTop: -87, height: '100%', zIndex: -99, backgroundColor: 'grey',justifyContent:'center' }}>
          <SliderBox sliderBoxHeight={400} images={path} />
        </View>


        <TouchableOpacity
          style={{ width: '10%', height: '10%', justifyContent: 'flex-start', marginLeft: 10,marginTop:-50 }}
        >
          <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '60%', height: '100%' }}
              source={require('../../img/WhiteStar.png')}
            />
          </View>

        </TouchableOpacity>

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
            data={data}
            keyExtractor={item => item.iddoginfo}
            renderItem={({ item }) => (
              <Text key={item} >
                
              </Text>
            )}
          />
          <Text style={styleinfo.headfont}>golden retriever</Text>
        </View>




      </View>
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


