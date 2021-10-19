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
  const [datalist, setDatalist] = useState([]);
  const [type, setType] = useState(3);
  const [search, setSearch] = useState('');
  const [Toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(null);
  const [wool, setWool] = useState(null);
  const [ear, setEar] = useState(null);


  const listSize = [
    {
      status: 'Small',
      size: 14,
      title: 'พันธุ์เล็ก'
    },
    {
      status: 'Medium',
      size: 18,
      title: 'พันกลาง'
    },
    {
      status: 'Large',
      size: 22,
      title: 'พันใหญ่'
    }
  ]

  const listWool = [
    {
      wool: 'Long',
      title: 'ขนยาว'
    },
    {
      wool: 'Short',
      title: 'ขนสั้น'
    }
  ]

  const listEars = [
    {
      status: 'Stand',
      title: 'หูตั้ง'
    },
    {
      status: 'Drop',
      title: 'หูตก'
    }
  ]

  const setfilter = () => {
    if (status !== null) {
      if (wool !== null && ear !== null) {
        setDatalist([...info.filter(item => item.typeears === ear && item.typewool === wool && item.type === status)])
      } else {
        if (wool == null) {
          if (ear == null) {
            setDatalist([...info.filter(item => item.type === status)])
          } else {
            setDatalist([...info.filter(item => item.typeears === ear && item.type === status)])
          }
        } else {
          setDatalist([...info.filter(item => item.type === status && item.typewool === wool)])
        }
      }
    } else if (wool !== null) {
      if (status == null) {
        if (ear == null) {
          setDatalist([...info.filter(item => item.typewool === wool)])
        } else {
          setDatalist([...info.filter(item => item.typewool === wool && item.typeears === ear)])
        }
      } else {
        setDatalist([...info.filter(item => item.typewool === wool && item.type === status)])
      }
    } else if (ear !== null) {
      if (wool == null) {
        if (status == null) {
          setDatalist([...info.filter(item => item.typeears === ear)])
        } else {
          setDatalist([...info.filter(item => item.typeears === ear && item.type === status)])
        }
      } else {
        setDatalist([...info.filter(item => item.typeears === ear && item.typewool === wool)])
      }
    } else {
      setDatalist([...info.filter(item => item.typeears === ear && item.typewool === wool && item.type === status)])
    }

  }

  const setfilterwool = (wool) => {
    if (wool !== null) {
      setDatalist([...info.filter(item => item.typewool === wool && item.type === status)])
    } else {
      setDatalist(info)
    }
    setWool(wool)
  }

  useEffect(() => {
    // Post updated, do something with `route.params.post`
    // For example, send the post to the server 
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdoginfo.php')
        setInfo(response.data);
        setMaster(response.data);
        setDatalist(response.data);
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
      setDatalist(newData);
      setSearch(text);
    } else {
      setDatalist(master);
      setSearch(text);
    }
  }

  let formatData = (datalist, numColumns) => {
    const totalRows = Math.floor(datalist.length / numColumns)
    let totalLastRow = datalist.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      datalist.push({ iddoginfo: 'blank', empty: true })
      totalLastRow++
    }
    return datalist
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
              source={{ uri: item.imgcut }}
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
            placeholder="ค้นหา ...."
            onChangeText={(text) => seachFilter(text)}
            value={search}
          />
          <TouchableOpacity
            onPress={() => setToggle(!Toggle)}
            style={{
              width: '13%',
              elevation: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Toggle ? '#1A508B' : 'white',
              borderRadius: 12,
              height: 50
            }}>
            <FontAwesome5
              name={'filter'}
              size={25}
              color={Toggle ? 'white' : '#1A508B'}
            />
          </TouchableOpacity>

        </View>
        {Toggle ? (
          <>
            <View
              style={{
                width: '100%',
                height: 45,
                backgroundColor: 'white',

                justifyContent: 'center',
                paddingLeft: 20,
                flexDirection: 'row'
              }}>
              <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#1A508B', fontFamily: 'FC_Iconic', fontSize: 24 }}>เลือกตัวกรอง</Text>
              </View>
              <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                  // onPress={() => { setStatus(); setWool(); setToggle(false); setDatalist(info); }}
                  onPress={setfilter}
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    backgroundColor: '#1A508B',
                    height: 35,
                    marginRight: 10,
                    justifyContent: 'center',
                    elevation: 8,
                    borderRadius: 8
                  }}>
                  <FontAwesome5
                    name={'search'}
                    size={15}
                    color={'white'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { setStatus(null); setWool(null); setEar(null); setDatalist(info); }}
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    backgroundColor: '#FF5A5A',
                    height: 35,
                    marginRight: 10,
                    justifyContent: 'center',
                    elevation: 8,
                    borderRadius: 8
                  }}>
                  <Text style={{ marginTop: 5, fontFamily: 'FC_Iconic', color: 'white', fontSize: 18 }}>ล้าง </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                height: 65,
                backgroundColor: 'white',
                alignItems: 'center',
                paddingLeft: 20
              }}>
              {listSize.map(item => (
                <>
                  <TouchableOpacity
                    onPress={() => { setStatus(item.status); }}
                    style={{
                      width: '30.5%',
                      alignItems: 'center',
                      backgroundColor: status == item.status ? '#1A508B' : 'white',
                      height: 50,
                      marginRight: 10,
                      justifyContent: 'center',
                      elevation: 8,
                      borderRadius: 8
                    }}>
                    <FontAwesome5
                      name={'dog'}
                      size={item.size}
                      color={status == item.status ? 'white' : '#1A508B'}
                    />
                    <Text style={{ marginTop: 5, fontFamily: 'FC_Iconic', color: status == item.status ? 'white' : '#1A508B' }}>{item.title} </Text>
                  </TouchableOpacity>
                </>
              ))}

            </View>
            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: '100%' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#EBEBEB', marginTop: 5, marginBottom: 2 }} />
              <View style={{ flex: 1, height: 2, backgroundColor: '#EBEBEB', marginTop: 5, marginBottom: 2 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}
            <View
              style={{
                width: '100%',
                paddingLeft: 20,
                flexDirection: 'row',
                height: 70,
                backgroundColor: 'white',
                alignItems: 'center'
              }}>
              {listWool.map(item => (
                <TouchableOpacity
                  onPress={() => setWool(item.wool)}
                  style={{
                    width: '47%',
                    alignItems: 'center',
                    backgroundColor: wool == item.wool ? '#1A508B' : 'white',
                    height: 50,
                    marginRight: 10,
                    justifyContent: 'center',
                    elevation: 8,
                    borderRadius: 8
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: wool == item.wool ? 'white' : '#1A508B',
                      fontFamily: 'FC_Iconic'
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              ))}
              <View style={{ width: '90%', height: 2 }}></View>
            </View>
            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', width: '100%' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#EBEBEB', marginTop: 5, marginBottom: 2 }} />
              <View style={{ flex: 1, height: 2, backgroundColor: '#EBEBEB', marginTop: 5, marginBottom: 2 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}
            <View
              style={{
                width: '100%',
                paddingLeft: 20,
                flexDirection: 'row',
                height: 70,
                backgroundColor: 'white',
                alignItems: 'center'
              }}>
              {listEars.map(item => (
                <>
                  <TouchableOpacity
                    onPress={() => setEar(item.status)}
                    style={{
                      width: '47%',
                      alignItems: 'center',
                      backgroundColor: ear == item.status ? '#1A508B' : 'white',
                      height: 50,
                      marginRight: 10,
                      justifyContent: 'center',
                      elevation: 8,
                      borderRadius: 8
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: ear == item.status ? 'white' : '#1A508B',
                        fontFamily: 'FC_Iconic'
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>

                </>
              ))}
              <View style={{ width: '90%', height: 2 }}></View>
            </View>
          </>
        ) : null}
        <SafeAreaView >
          <ScrollView >
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.container}>
                <FlatList
                  data={formatData(datalist, numColumns)}
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
    marginBottom: 300
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
    backgroundColor: 'white',
    height: '12%'
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
