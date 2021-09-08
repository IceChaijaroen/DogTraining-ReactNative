import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import axios from 'axios';


export default function Recommend({ navigation, route }) {
  const { idtrain } = route.params;

  useEffect(() => {
    axios.get('http://35.187.253.40/showsingledogtrain.php',
      {
        params: {
          id: idtrain
        }
      })
      .then(response => {
        setTrain(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <>
      {/** -----------Header------------------ */}
      <View style={styles.headercontainer}>
        <View style={styles.header}>
          <View style={{ width: '100%', flexDirection: 'row', marginTop: '6%' }}>
            <View style={{ width: '50%' }}>
              <TouchableOpacity
                style={{ marginLeft: 15 }}
                onPress={() => props.navigation.openDrawer()}
              >
                <View style={{ width: '15%', height: 28, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                  <FontAwesome5 name='bars' size={16} color="#5E5E5E" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('Noti')}
              >
                <View style={{ width: 30, height: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                  <Fontisto name='bell-alt' size={15} color="#5E5E5E" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', height: '60%' }}>
            <View style={{ width: '40%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
              <View style={{ backgroundColor: 'white', width: '60%', height: 100, borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  source={require('../../img/dog.png')}
                  style={{
                    width: '55%',
                    height: '55%',

                  }}
                />
              </View>

            </View>
            <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
              <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                <View style={{ width: '50%', height: '100%', justifyContent: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}> น้องโบ้ </Text>
                </View>
                <View style={{ width: '50%', height: '100%', alignItems: 'center' }}>
                  <View style={styles.capsule}>
                    <View style={styles.incapsule}></View>
                  </View>
                </View>
              </View>
              <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                <View style={{ width: '80%', height: '100%' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}> โกลเด้น รีทรีฟเวอร์ </Text>
                </View>
                <View style={{ width: '20%', height: '100%', alignItems: 'flex-end' }}>
                  <Feather
                    name='triangle'
                    size={15}
                    color="#FFFFFF"
                    style={{
                      marginRight: 10,
                      transform: [{ rotate: "180deg" }],
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
