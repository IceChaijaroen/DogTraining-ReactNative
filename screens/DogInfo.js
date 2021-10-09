import React, { useEffect, useState } from 'react';
import { Demensions, TouchableOpacity, FlatList, Text, View, StyleSheet, Image, ScrollView, SafeAreaView, Button, TextInput } from 'react-native';
import Headerinfo from '../component/Headerinfo';
import { FontAwesome5, Fontisto, AntDesign } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import Noti from './Noti';
import { Component } from 'react';
import axios from 'axios';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ImageBackground } from 'react-native';


const numColumns = 2

export default function Doginfo({ navigation, route }) {
  const path = ('cut.jpg');
  const [info, setInfo] = useState([]);
  const [master, setMaster] = useState([]);
  const [type, setType] = useState(3);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Post updated, do something with `route.params.post`
    // For example, send the post to the server 
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdoginfo.php')
        setInfo(response.data);
        setMaster(response.data);
      } catch (err) {
        alert(err)
      }
    }
    fetchData();
  }, [])


  const seachFilter = (text) => {
    if (text) {
      const newData = master
        .filter((item) => {
          const itemData = item.dogname ? item.dogname.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        })
      setInfo(newData);
      setSearch(text);
    } else {
      setInfo(master);
      setSearch(text);
    }
  }

  let formatData = (info, numColumns) => {
    const totalRows = Math.floor(info.length / numColumns)
    let totalLastRow = info.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      info.push({ iddoginfo: 'blank', empty: true })
      totalLastRow++
    }
    return info
  }

  const renderItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={{ backgroundColor: 'transparent' }}></View>
    } else {
      return (
        <TouchableOpacity key={item.iddoginfo} style={{ width: '50%', alignItems: 'center' }} onPress={() => navigation.navigate('HomeInfo', {
          dogid: item.iddoginfo,
        })}>
          <View style={styles.card}>
            <ImageBackground
              source={{ uri: item.habit + path }}
              style={{ width: '100%', height: '100%' }}
              imageStyle={{ borderRadius: 10 }}
            >
              <View style={styles.cardcontent}>
                <View style={{ width: '80%', height: '20%', backgroundColor: '#4E4E4E', marginBottom: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic', width: '90%', marginLeft: 10 }}>
                    {item.dogname}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      )
    }

  }

  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'bahnschrift': require('../assets/fonts/bahnschrift.ttf'),
    'FC_Iconic': require('../assets/fonts/FC_Iconic_Bold.ttf'),
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        {/** -----------Header------------------ */}
        <View style={styles.headercontainer}>
          <View style={styles.header}>
            <View style={{ width: '100%', marginTop: '4%', flexDirection: 'row' }}>
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
              <Text style={styles.headertext}>ข้อมูลสายพันธุ์สุนัข</Text>
            </View>
          </View>
        </View>
        {/** -----------Header------------------ */}

        <View style={styles.search}>
          <SearchBar
            inputStyle={{ backgroundColor: '#575757' }}
            containerStyle={{ backgroundColor: '#575757', width: '90%', height: 50, borderRadius: 50 }}
            inputContainerStyle={{ backgroundColor: '#575757', width: '100%', height: "100%" }}
            placeholder="Type Here..."
            onChangeText={(text) => seachFilter(text)}
            value={search}
          />
        </View>
        <SafeAreaView >
          <ScrollView >
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
              <View style={styles.container}>
                <FlatList
                  data={formatData(info, numColumns)}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={numColumns}
                />

              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%',
    marginBottom: 250
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  card: {
    width: '90%',
    height: 215,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardcontent: {
    height: '100%',
    justifyContent: 'flex-end'
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'white'
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
    backgroundColor: '#1A508B',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  headertext: {
    fontSize: 30,
    color: 'white',
    letterSpacing: 1,
    fontFamily: 'FC_Iconic'
  }
});
