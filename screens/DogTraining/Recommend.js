import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Progress from '../../component/Progress';
import Headertraining from './Header';


export default function Recommend({ navigation, route }) {
  const { idtrain } = route.params;
  const [user, setUser] = useState();
  const [udogid, setUdogid] = useState();
  const [dogdata, setDogdata] = useState([]);
  const [doglevel, setDoglevel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('id')
        .then((value) => {
          setUser(value);
        })
    }
    fetchData();
  }, [user])

  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('udogid')
        .then((value) => {
          setUdogid(value);
          setIsLoading(true);
        })
    }
    fetchData();
  }, [udogid])


  return (
    <>
      {!isLoading ? (
        <>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#FFB97D" />
          </View>
        </>
      ) : (
        <>
          {/** -----------Header------------------ */}
          <Headertraining />
          {/** -----------Header------------------ */}


          <ScrollView >
            <View style={styles.container}>
              <View style={styles.card}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 35 }}>คำแนะนำ</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', height: 200, marginBottom: 30 }}>
                  <Image
                    source={require('../../img/DOG_ICONS1-05-512.png')}
                    style={{
                      width: '60%',
                      height: '100%'
                    }}
                  />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 60 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#4D4D4D' }}>จำเป็นต้องมีปลอกคอและเชือกจูง</Text>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Educate', { idtrain: idtrain })} style={{ width: '40%', height: 50, alignItems: 'center' }}>
                    <View style={{ width: '80%', height: '100%', backgroundColor: '#515151', borderRadius: 30, elevation: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginRight: 10 }}>เข้าใจ</Text>
                      <FontAwesome5
                        name='arrow-right'
                        color={'white'}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
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
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 25,
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
  }
});
