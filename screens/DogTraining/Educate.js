import { StatusBar } from 'expo-status-bar';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Animated, ActivityIndicator } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Paginator from '../../Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Progress from '../../component/Progress';
import Headertraining from './Header';


export default function Educate({ navigation, route }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dataRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollNext = () => {
    if (currentIndex < gif.length - 1) {
      dataRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log('last item.');
    }
  }

  const scrollPre = () => {
    if (currentIndex < gif.length + 1) {
      dataRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log('last item.');
    }
  }


  const { idtrain } = route.params;
  const [gif, setGif] = useState([]);
  const [user, setUser] = useState();
  const [udogid, setUdogid] = useState();
  const [dogdata, setDogdata] = useState([]);
  const [doglevel, setDoglevel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [train, setTrain] = useState([]);


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
        })
    }
    fetchData();
  }, [udogid])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/educate.php',
          {
            params: {
              idtrain: idtrain
            }
          })
        setTrain(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [train])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/gif.php',
          {
            params: {
              idtrain: idtrain
            }
          })
        setGif(response.data);
        setIsLoading(true);
      } catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [gif])


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



            <View style={styles.container}>
              <View style={styles.card}>
                {train.map(item => (
                  <>
                    <View style={{ width: '98%', height: '10%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', justifyContent: 'flex-start' }}>{item.trainname} </Text>
                      <Image
                        source={{ uri: item.trainimg }}
                        style={{
                          width: 50,
                          height: 50
                        }}
                      />
                    </View>
                  </>
                ))}
                <FlatList
                  data={gif}
                  renderItem={
                    ({ item }) => (
                      <View style={{ width: 350, alignItems: 'center' }}>

                        <View style={{ width: '98%', alignItems: 'center', justifyContent: 'center', height: '58%' }}>
                          <Image
                            source={{ uri: item.gif }}
                            style={{
                              width: '100%',
                              height: '100%'
                            }}
                          />
                        </View>

                        <View style={{ width: '100%', height: '11%', justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontSize: 25, fontFamily: 'FC_Iconic' }}> ขั้นตอนที่ {item.step} </Text>
                        </View>
                        <View style={{ width: '88%', height: '20%' }}>
                          <Text style={{ fontSize: 25, fontFamily: 'FC_Iconic', textAlign: 'left' }}> {item.descrip}</Text>

                        </View>
                      </View>
                    )
                  }
                  keyExtractor={(item, index) => index.toString()}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  bounces={false}
                  keyExtractor={(item) => item.idgif}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                  })}
                  scrollEventThrottle={32}
                  onViewableItemsChanged={viewableItemsChanged}
                  viewabilityConfig={viewConfig}
                  ref={dataRef}
                />
                <View style={{ width: '98%', justifyContent: 'center', height: '8%', flexDirection: 'row' }}>
                  <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={scrollPre} style={{ width: '40%', height: '70%', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <View style={{ width: '100%', height: '100%', backgroundColor: '#515151', borderRadius: 30, elevation: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome5
                          name='arrow-left'
                          color={'white'}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={{ width: '40%', height: '80%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Paginator scrollX={scrollX} data={gif} />
                  </View>

                  <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={scrollNext} style={{ width: '40%', height: '70%', alignItems: 'center', justifyContent: 'flex-start' }}>
                      <View style={{ width: '100%', height: '100%', backgroundColor: '#515151', borderRadius: 30, elevation: 5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <FontAwesome5
                          name='arrow-right'
                          color={'white'}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ width: '100%', height: '8%', justifyContent: 'center', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Training', { idtrain: idtrain })} style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F37575', borderRadius: 20 }}>
                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: 'white' }}>เริ่มฝึกฝน</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>)}
      </>
    );
  }
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
    paddingVertical: 10,
    elevation: 5,
    marginBottom: 5,

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
