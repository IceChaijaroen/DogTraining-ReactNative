import { StatusBar } from 'expo-status-bar';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, Animated } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import Paginator from '../../Paginator';


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


  const { id } = route.params;
  const [gif, setGif] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://34.87.28.196/gif.php',
        {
          params: {
            id: id
          }
        })
        setGif(response.data);
      } catch {
        alert('error');
      }
    }
    fetchData();
  },[gif])


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
            <View style={{ width: '100%', flexDirection: 'row', marginTop: '6%' }}>
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



        <View style={styles.container}>
          <View style={styles.card}>
            <FlatList
              data={gif}
              renderItem={
                ({ item }) => (
                  <View style={{ width: 350, alignItems: 'center' }}>
                    <View style={{ width: '98%', height: '10%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', justifyContent: 'flex-start' }}>{item.gifname} </Text>
                      <Image
                        source={{ uri: item.trainimg }}
                        style={{
                          width: 50,
                          height: 50
                        }}
                      />
                    </View>
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
                      <Text style={{ fontSize: 25, fontFamily: 'FC_Iconic' }}> {item.step} </Text>
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
              <TouchableOpacity onPress={() => navigation.navigate('Training', { id: id })} style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F37575', borderRadius: 20 }}>
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 20, color: 'white' }}>เริ่มฝึกฝน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

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
