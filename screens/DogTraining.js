import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from 'react-native';
import Opendrawer from '../component/OpenDrawer';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Progress from '../component/Progress';
import AddDog from './AddDog';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Dogtraining({ navigation, route }, disabled) {
  const [train, setTrain] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDog, setLoadingDog] = useState(false);
  const [udogid, setUdogid] = useState();
  const [user, setUser] = useState();
  const [dogdata, setDogdata] = useState([]);
  const [doglevel, setDoglevel] = useState([]);


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
          setLoadingDog(true);
        })
    }
    fetchData();
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdogtrain.php', {
          params: {
            uid: user,
            udogid: udogid
          }
        })
        if (response.data == 'null') {
          setIsLoading(true);
        } else {
          setTrain(response.data);
          setIsLoading(true);
        }
      } catch (err) {
        alert(err)
      }
    }
    fetchData();
  }, [train])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
          {
            params: {
              id: user,
              udogid: udogid
            }
          })
        if (response.data == 'null') {
          setIsLoading(true);
        } else {
          setDogdata(response.data);
          setIsLoading(true);
        }
      } catch {
        alert("showuserdogfromuser")
      }
    }
    fetchData();
  }, [train])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdoglevel.php',
          {
            params: {
              id: user,
              udogid: udogid
            }
          })
        if (response.data == 'null') {
          setIsLoading(true);
        } else {
          setDoglevel(response.data);
          setIsLoading(true);
        }
      } catch {
        alert("showdoglevel")
      }
    }
    fetchData();
  }, [doglevel])



  const level0 = ({ item, index }) => {
    if (item.trainlevel == '0') {
      return (
        <View style={styles.minicardcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend', { idtrain: item.idtrain })} activeOpacity={disabled ? 0.9 : 0} style={{ width: '100%', alignItems: 'center' }}>
            <View key={index} style={styles.minicard}>
              <View style={{ width: '100%', flexDirection: 'row', height: '95%' }}>
                <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Image
                    source={{ uri: item.trainimg }}
                    style={{
                      width: '65%',
                      height: '65%',
                    }}
                  />
                </View>
                <View style={styles.subtextcontainer}>
                  <Text style={styles.subtext}> {item.trainname}</Text>
                </View>
              </View>
              <View style={{ width: '90%', height: 5 }}>
                <Progress step={item.sumstep} steps={500} height={5} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'transparent' }}></View>
      )
    }
  }


  const level1 = ({ item, index }) => {
    if (item.trainlevel == '1') {
      return (
        <View style={styles.minicardcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend', { idtrain: item.idtrain })} activeOpacity={disabled ? 0.9 : 0} style={{ width: '100%', alignItems: 'center' }}>
            <View key={index} style={styles.minicard}>
              <View style={{ width: '100%', flexDirection: 'row', height: '95%' }}>
                <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Image
                    source={{ uri: item.trainimg }}
                    style={{
                      width: '65%',
                      height: '65%',
                    }}
                  />
                </View>
                <View style={styles.subtextcontainer}>
                  <Text style={styles.subtext}> {item.trainname}</Text>
                </View>
              </View>
              <View style={{ width: '90%', height: 5 }}>
                <Progress step={item.sumstep} steps={500} height={5} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'transparent' }}></View>
      )
    }
  }

  const level2 = ({ item, index }) => {
    if (item.trainlevel == '2') {
      return (
        <View style={styles.minicardcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend', { idtrain: item.idtrain })} activeOpacity={disabled ? 0.9 : 0} style={{ width: '100%', alignItems: 'center' }}>
            <View key={index} style={styles.minicard}>
              <View style={{ width: '100%', flexDirection: 'row', height: '95%' }}>
                <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Image
                    source={{ uri: item.trainimg }}
                    style={{
                      width: '65%',
                      height: '65%',
                    }}
                  />
                </View>
                <View style={styles.subtextcontainer}>
                  <Text style={styles.subtext}> {item.trainname}</Text>
                </View>
              </View>
              <View style={{ width: '90%', height: 5 }}>
                <Progress step={item.sumstep} steps={500} height={5} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'transparent' }}></View>
      )
    }
  }


  const level3 = ({ item, index }) => {
    if (item.trainlevel == '3') {
      return (
        <View style={styles.minicardcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Recommend', { idtrain: item.idtrain })} activeOpacity={disabled ? 0.9 : 0} style={{ width: '100%', alignItems: 'center' }}>
            <View key={index} style={styles.minicard}>
              <View style={{ width: '100%', flexDirection: 'row', height: '95%' }}>
                <View style={{ width: '30%', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <Image
                    source={{ uri: item.trainimg }}
                    style={{
                      width: '65%',
                      height: '65%',
                    }}
                  />
                </View>
                <View style={styles.subtextcontainer}>
                  <Text style={styles.subtext}> {item.trainname}</Text>
                </View>
              </View>
              <View style={{ width: '90%', height: 5 }}>
                <Progress step={item.sumstep} steps={500} height={5} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'transparent' }}></View>
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
        {!isLoading ? (
          <>
            <Text style={{ fontSize: 100 }}> Loading ... </Text>
          </>
        ) : (
          <>

            {train == 'null' ? (
              <AddDog />
            ) : (
              <>
                {loadingDog ? (
                  <>
                    {/** -----------Header------------------ */}
                    <View style={styles.headercontainer}>
                      <View style={styles.header}>
                        <View style={{ width: '100%', flexDirection: 'row', marginTop: '10%' }}>
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
                              onPress={() => navigation.navigate('Noti')}
                            >
                              <View style={{ width: 30, height: 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 7 }}>
                                <Fontisto name='bell-alt' size={15} color="#5E5E5E" />
                              </View>
                            </TouchableOpacity>
                          </View>
                        </View>


                        <FlatList
                          data={dogdata}
                          renderItem={({ item }) => (
                            <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', height: 140 }}>
                              <View style={{ width: '40%', alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: '60%', height: 100, borderRadius: 80, justifyContent: 'center', alignItems: 'center' }}>
                                  <Image
                                    source={{ uri: item.udogimg }}
                                    style={{
                                      width: '60%',
                                      height: '60%',

                                    }}
                                  />
                                </View>

                              </View>
                              <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                                <View style={{ width: '80%', height: '25%', justifyContent: 'center' }}>
                                  <Text style={{ fontFamily: 'FC_Iconic', fontSize: 25, color: 'white' }}> {item.udogname} </Text>
                                </View>
                                <View style={{ width: '80%', height: '25%', justifyContent: 'center' }}>
                                  <Text style={{ fontFamily: 'FC_Iconic', fontSize: 25, color: 'white' }}> {item.udogbreed} </Text>
                                </View>
                                <View style={{ width: '80%', height: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                  {doglevel.map((item, key) => (
                                    <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
                                      <Progress key={key} step={item.sumstep} steps={5000} height={15} />
                                    </View>
                                  ))}
                                </View>

                              </View>
                            </View>
                          )}
                        />


                      </View>
                    </View>
                    {/** -----------Header------------------ */}


                    <ScrollView >
                      <View style={styles.container}>
                        <View style={styles.card}>
                          <View style={{ width: '80%', height: 30, marginBottom: '5%' }}>
                            <Text style={styles.headertext}> Level 0 :  ปรับพฤติกรรม </Text>
                          </View>
                          <FlatList
                            data={train}
                            renderItem={level0}
                            keyExtractor={(item, index) => index.toString()}
                          />


                          {/**------------------------------------------------------------------------------------------- */}
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                          </View>
                          {/**------------------------------------------------------------------------------------------- */}


                          <View style={{ width: '80%', height: 30, marginBottom: '5%' }}>
                            <Text style={styles.headertext}> Level 1 :  ท่าพื้นฐาน </Text>
                          </View>
                          <FlatList
                            data={train}
                            renderItem={level1}
                            keyExtractor={(item, index) => index.toString()}
                          />


                          {/**------------------------------------------------------------------------------------------- */}
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                          </View>
                          {/**------------------------------------------------------------------------------------------- */}


                          <View style={{ width: '80%', height: 30, marginBottom: '5%' }}>
                            <Text style={styles.headertext}> Level 2 :  ท่ายาก </Text>
                          </View>
                          <FlatList
                            data={train}
                            renderItem={level2}
                            keyExtractor={(item, index) => index.toString()}
                          />


                          {/**------------------------------------------------------------------------------------------- */}
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                            <View style={{ flex: 1, height: 3, backgroundColor: '#CFCFCF', marginTop: 10, marginBottom: 20 }} />
                          </View>
                          {/**------------------------------------------------------------------------------------------- */}


                          <View style={{ width: '80%', height: 30, marginBottom: '5%' }}>
                            <Text style={styles.headertext}> Level 3 :  ท่าพิเศษ </Text>
                          </View>
                          <FlatList
                            data={train}
                            renderItem={level3}
                            keyExtractor={(item, index) => index.toString()}
                          />


                        </View>
                      </View>
                    </ScrollView>
                  </>
                ) : (
                  <>
                    <Text style={{ fontSize: 100 }}> Loading dog ... </Text>
                  </>
                )}

              </>
            )}
          </>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: 100
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
    fontFamily: 'FC_Iconic',
    fontSize: 25,
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
    backgroundColor: '#DADADA',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 25
  },
  minicardcontainer: {
    width: '100%',
    alignItems: 'center',
    height: 95,
    marginBottom: '5%'

  },
  minicard: {
    width: '90%',
    height: '99%',
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
    fontFamily: 'FC_Iconic',
    fontSize: 23,
    color: '#676767'
  }
});
