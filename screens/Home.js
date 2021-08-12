import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  SessionStorageProvider,
  useSessionStorage,
} from "react-sessionstorage";


import Tabs from '../component/Tab';
import Doginfo from './DogInfo';
import Headerinfo from '../component/Headerinfo';
import axios from 'axios';


export default function Home({ navigation }) {
  const [user, setValue] = useState();

  useEffect(() => {
    AsyncStorage.getItem('id')
      .then((value) => {
        setValue(value);
      })
  })



  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ width: '40%', alignItems: 'flex-end' }}>
            <Image
              style={{ width: 50, height: '58%' }}
              source={require('../img/LOGOcomwhite.png')}
            />
          </View>
          <View style={{ width: '60%', alignItems: 'flex-start', marginLeft: 15 }}>
            <Text style={styles.headertext}>Dog Training </Text>

          </View>
        </View>
        <ScrollView>
          <View style={styles.banner} >
            <Image
              style={{ width: '100%', height: '100%', borderRadius: 30, }}
              source={require('../img/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg')}
            />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
            <TouchableOpacity
              
              onPress={() =>
                navigation.navigate('Doginfo')
              }>
              <View style={styles.minicard}>
                <Image
                  style={{ width: '60%', height: '60%' }}
                  source={require('../img/istockphoto-1084516046-612x612pink.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              
              onPress={() =>
                navigation.navigate('Dogtrain')
              }>
              <View style={styles.minicard}>
                <Image
                  style={{ width: '60%', height: '60%' }}
                  source={require('../img/dog-trainingpink.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              
              onPress={() =>
                navigation.navigate('Mydog')
              }>
              <View style={styles.minicard}>
                <Image
                  style={{ width: '60%', height: '60%' }}
                  source={require('../img/194pink279.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
            <View style={styles.textminicard} >
              <Text style={{ fontWeight: 'bold' }} >สายพันธุ์สุนัข</Text>
            </View>
            <View style={styles.textminicard}>
              <Text style={{ fontWeight: 'bold' }}>ฝึกสุนัข</Text>
            </View>
            <View style={styles.textminicard}>
              <Text style={{ fontWeight: 'bold' }}>สุนัขของคุณ</Text>
            </View>
          </View>

          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#E3E3E3', marginLeft: 20, marginTop: 25, marginBottom: 25 }} />
            <View style={{ flex: 1, height: 2, backgroundColor: '#E3E3E3', marginRight: 20, marginTop: 25, marginBottom: 25 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          {/**ท่าฝึกแนะนำ*/}
          <View style={{ marginLeft: 40, marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>ท่าฝึกแนะนำ</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true} >
            <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 25 }}>
              <View style={styles.longcard}>
                <Image
                  style={{ width: '50%', height: '33%', marginBottom: 40 }}
                  source={require('../img/003-dog.png')}
                />
                <Text style={{ fontWeight: 'bold' }}>คุ้นชินกับสายจูง</Text>
              </View>
              <View style={styles.longcard}>
                <Image
                  style={{ width: '50%', height: '33%', marginBottom: 40 }}
                  source={require('../img/corgi-512.png')}
                />
                <Text style={{ fontWeight: 'bold' }}>การใส่โซ่คอ</Text>
              </View>
              <View style={styles.longcard}>
                <Image
                  style={{ width: '50%', height: '30%', marginBottom: 40 }}
                  source={require('../img/unnamed.png')}
                />
                <Text style={{ fontWeight: 'bold' }}>การใส่ปลอกคอ</Text>
              </View>
            </View>
          </ScrollView>

          {/**สุนัขพันธุ์โปรด*/}
          <View style={{ marginLeft: 40, marginBottom: 10, flexDirection: 'row' }}>
            <Image
              style={{ width: '5%', height: '100%', marginRight: 10 }}
              source={require('../img/YellowStar.png')}
            />
            <Text style={{ fontWeight: 'bold' }}>สุนัขพันธุ์โปรด</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 100 }}>
            <View style={styles.favcard}>
              <Image
                style={{ width: 50, height: 49, marginBottom: 10 }}
                source={require('../img/plusgreen.png')}
              />
              <Text style={{ fontWeight: 'bold' }}>เพิ่มสุนัขตัวโปรด</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1F1F1',
  },
  header: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555555',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    letterSpacing: 1,
  },
  banner: {
    alignItems: 'center',
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  minicard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  textminicard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    marginTop: 5
  },
  longcard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 30,
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
  favcard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 165,
    height: 250,
    backgroundColor: '#DDDDDD',
    borderRadius: 30,
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

});