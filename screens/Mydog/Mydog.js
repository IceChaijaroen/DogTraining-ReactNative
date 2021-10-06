import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';

import Headermydog from '../../component/Headermydog';
import Pickerdog from '../../component/Picker';
import Pickersex from '../../component/Pickersex';
import MyDatePicker from '../../component/DatePicker';
import MydogTabs from '../../component/MydogTabs';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Tab = createBottomTabNavigator();

export default function Mydog({ navigation }) {
  const [text, onChangeText] = React.useState("น้องโบ้");


  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'bahnschrift': require('../../assets/fonts/bahnschrift.ttf'),
    'FC_Iconic': require('../../assets/fonts/FC_Iconic_Bold.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        {/** -----------Header------------------ */}
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <View style={{ width: '100%', marginTop: 20, flexDirection: 'row' }}>
              <View style={{ width: '50%' }}>
                <TouchableOpacity
                  style={{ marginLeft: 15 }}
                  onPress={() => navigation.openDrawer()}
                >
                  <View style={{ width: '15%', height: 28, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                    <FontAwesome5 name='bars' size={16} color="#5E5E5E" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: '50%', alignItems: 'flex-end' }}>
                <TouchableOpacity
                  style={{ marginRight: 15 }}
                  onPress={() => navigation.navigate('Settings')}
                >
                  <View style={{ width: 30, height: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                    <Fontisto name='player-settings' size={18} color="#555555" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center', }}>
              <Text style={styles.headertext}>สุนัขของคุณ</Text>
            </View>
          </View>
        </View>
        {/** -----------Header------------------ */}
        <MydogTabs />
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
  card: {
    alignItems: 'center',
    width: '90%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 50,
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
  rowcontent: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  capsule: {
    marginTop: 10,
    width: '100%',
    height: 25,
    borderRadius: 15,
    backgroundColor: '#F5F5F5'
  },
  incapsule: {
    width: '75%',
    height: 25,
    borderRadius: 15,
    backgroundColor: '#FFB97D'
  },
  headercontainer: {
    width: '100%',
    height: '15%',
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008891',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  headertext: {
    fontFamily: 'FC_Iconic',
    fontSize: 30,
    color: 'white',
    letterSpacing: 1,
  }

});
