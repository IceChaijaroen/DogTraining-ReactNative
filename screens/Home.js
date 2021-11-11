import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, ImageBackground } from 'react-native';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import Tabs from '../component/Tab';
import Doginfo from './DogInfo';
import Headerinfo from '../component/Headerinfo';
import axios from 'axios';


const { width } = Dimensions.get("window");
const { height } = width * 100 / 60;

export default function Home({ navigation }) {
  const [user, setUser] = useState();
  const [udogid, setUdog] = useState();
  const [banner, setBanner] = useState([]);
  const [train, setTrain] = useState([]);
  const [showfav, setShowfav] = useState([]);
  const [process, setProcess] = useState();
  const [facebook, setFacebook] = useState();
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);

  const fetchData = async () => {
    try {
      const response = await AsyncStorage.getItem('id');
      setUser(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  })

  useEffect(() => {
    AsyncStorage.getItem('udogid')
      .then((value) => {
        setUdog(value);
      })
  })

  useEffect(() => {
    AsyncStorage.getItem('facebook')
      .then((value) => {
        setFacebook(value);
      })
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/getbanner.php');
        setBanner(response.data);
      } catch (error) {
        console.log(err)
      }
    }
    fetchData();
  }, [banner])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdogtrain.php', {
          params: {
            uid: user,
            udogid: udogid
          }
        })
        setTrain(response.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [banner])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://35.187.253.40/showuserdogfromuser.php',
        {
          params: {
            id: user,
            udogid: udogid
          }
        })
      setProcess(response.data.process);
    }
    fetchData();
  }, [train])



  const Showfev = async () => {
    try {
      const response = await axios.get('http://35.187.253.40/showfavoritehome.php',
        {
          params: {
            uid: user
          }
        })
      setShowfav(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Showfev();
  }, [showfav]);




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
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ width: '40%', alignItems: 'flex-end' }}>
              <Image
                style={{ width: '45%', height: '58%' }}
                source={require('../img/Dogtraining-logo.png')}
              />
            </View>
            <View style={{ width: '60%', alignItems: 'flex-start', marginLeft: 15 }}>
              <Text style={styles.headertext}>Dog Training </Text>

            </View>
          </View>
          <ScrollView>
            <View style={styles.banner} >
              {/**-----------------------------------------Picture Slice ----------------------------------------------------------------------------------- */}
              <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )}
                horizontal={true}
                style={{
                  width: '100%',
                  height: '100%'
                }}>
                {banner.map((item, index) => (
                  <TouchableOpacity onPress={() => navigation.navigate('testdata2', { id: item.bannerid })} style={{ width: 390, height: 200, borderRadius: 30 }}>
                    <Image
                      key={index}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 30
                      }}
                      source={{ uri: item.img }}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                {banner.map((i, k) => {
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
              {/**------------------------------------------------------------------------------------------------------------------------------------------- */}
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
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: '#555555' }} >สายพันธุ์สุนัข</Text>
              </View>
              <View style={styles.textminicard}>
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: '#555555' }}>ฝึกสุนัข</Text>
              </View>
              <View style={styles.textminicard}>
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: '#555555' }}>สุนัขของคุณ</Text>
              </View>
            </View>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#E3E3E3', marginLeft: 20, marginTop: 25, marginBottom: 25 }} />
              <View style={{ flex: 1, height: 2, backgroundColor: '#E3E3E3', marginRight: 20, marginTop: 25, marginBottom: 25 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            {/**ท่าฝึกแนะนำ*/}
            {!process ? (
              <View style={{ backgroundColor: 'transparent' }}></View>

            ) : (
              <View style={{ marginLeft: 40, marginBottom: 10 }}>
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: '#555555' }}>ท่าฝึกแนะนำ</Text>
              </View>
            )}



            <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 25 }}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                data={train}
                keyExtractor={(item, index) => { return index.toString(); }}
                renderItem={({ item, index }) => (
                  <>
                    {(() => {
                      if (process < 40) {
                        return (
                          <>
                            {item.trainlevel == 0 ? (
                              <>
                                <TouchableOpacity onPress={() => navigation.navigate('Educate', { idtrain: item.idtrain })} key={index} style={styles.longcard}>
                                  <Image
                                    style={{ width: '50%', height: '33%', marginBottom: 40 }}
                                    source={{ uri: item.trainimg }}
                                  />
                                  <View style={{ width: '85%' }}>
                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, textAlign: 'center', color: '#555555' }}>{item.trainname}</Text>
                                  </View>

                                </TouchableOpacity>
                              </>
                            ) : (
                              <>
                                <View key={index} style={{ backgroundColor: 'transparent' }}></View>
                              </>
                            )}
                          </>
                        )

                      } else if (process < 100) {
                        return (
                          <>
                            {item.trainlevel == 1 ? (
                              <>
                                <TouchableOpacity onPress={() => navigation.navigate('Educate', { idtrain: item.idtrain })} key={index} style={styles.longcard}>
                                  <Image
                                    style={{ width: '50%', height: '33%', marginBottom: 40 }}
                                    source={{ uri: item.trainimg }}
                                  />
                                  <View style={{ width: '85%' }}>
                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, textAlign: 'center' }}>{item.trainname}</Text>
                                  </View>

                                </TouchableOpacity>
                              </>
                            ) : (
                              <>
                                <View key={index} style={{ backgroundColor: 'transparent' }}></View>
                              </>
                            )}
                          </>
                        )

                      } else if (process < 140) {
                        return (
                          <>
                            {item.trainlevel == 2 ? (
                              <>
                                <TouchableOpacity onPress={() => navigation.navigate('Educate', { idtrain: item.idtrain })} key={index} style={styles.longcard}>
                                  <Image
                                    style={{ width: '50%', height: '33%', marginBottom: 40 }}
                                    source={{ uri: item.trainimg }}
                                  />
                                  <View style={{ width: '85%' }}>
                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, textAlign: 'center' }}>{item.trainname}</Text>
                                  </View>

                                </TouchableOpacity>
                              </>
                            ) : (
                              <>
                                <View key={index} style={{ backgroundColor: 'transparent' }}></View>
                              </>
                            )}
                          </>
                        )

                      } else if (!process) {
                        return (
                          <>
                            <View key={index} style={{ backgroundColor: 'transparent' }}></View>
                          </>
                        )

                      } else {
                        return (
                          <>
                            {item.trainlevel == 3 ? (
                              <>
                                <TouchableOpacity onPress={() => navigation.navigate('Educate', { idtrain: item.idtrain })} key={index} style={styles.longcard}>
                                  <Image
                                    style={{ width: '50%', height: '33%', marginBottom: 40 }}
                                    source={{ uri: item.trainimg }}
                                  />
                                  <View style={{ width: '85%' }}>
                                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, textAlign: 'center' }}>{item.trainname}</Text>
                                  </View>

                                </TouchableOpacity>
                              </>
                            ) : (
                              <>
                                <View key={index} style={{ backgroundColor: 'transparent' }}></View>
                              </>
                            )}
                          </>
                        )
                      }

                    })()}

                  </>
                )} />
            </View>


            {/**สุนัขพันธุ์โปรด*/}
            <View style={{ marginLeft: 40, marginBottom: 10, flexDirection: 'row' }}>
              <Image
                style={{ width: '5%', height: '100%', marginRight: 10 }}
                source={require('../img/YellowStar.png')}
              />
              <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: '#555555' }}>สุนัขพันธุ์โปรด</Text>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={showfav}
              renderItem={({ item, index }) => (
                <>
                  <View style={{ flexDirection: 'row', marginLeft: index > 0 ? 5 : 20, marginBottom: 100 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeInfo', {
                      dogid: item.iddoginfo,
                    })} style={styles.favcard}>
                      <ImageBackground
                        style={{ width: '100%', height: '100%' }}
                        imageStyle={{ borderRadius: 30 }}
                        source={{ uri: item.imgcut }}
                      >
                        <View style={styles.cardcontent}>
                          <View style={{ width: '80%', height: '20%', backgroundColor: '#4E4E4E', marginBottom: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'white', fontFamily: 'FC_Iconic', width: '90%', marginLeft: 10 }}>
                              {item.dogname}
                            </Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            />
          </ScrollView>
        </View >
      </>
    );
  }
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
    elevation: 6,
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
  cardcontent: {
    height: '100%',
    justifyContent: 'flex-end'
  },

});