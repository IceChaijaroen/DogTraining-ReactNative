import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Image, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SliderBox } from "react-native-image-slider-box";
import Slider from './Slider';


const Top = createMaterialTopTabNavigator();
export const NetworkContext = React.createContext();


export default function HomeInfo({ route, navigation }) {
  const path = ['01.jpg', '02.jpg', '03.jpg'];
  const { dogid } = route.params;
  const [info, setInfo] = useState([]);


  useEffect(() => {
    axios.get('http://34.87.28.196/showsingle.php', {
      params: {
        id: dogid
      }
    }
    )
      .then(response => {
        setInfo(response.data);
      })
      .catch(err => {
        console.log(err)
      })
  })



  const images = info.map(item => (
    item.habit
  ))

  const showpath = path.map(item => (
    images + item
  ))

  const renderItem = () => {
    return (
      <View style={{ marginTop: -87, height: '100%', zIndex: -99, backgroundColor: 'grey', justifyContent: 'center' }}>
        <SliderBox sliderBoxHeight={400} images={showpath} />
      </View>
    )
  }



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
        <View style={{ width: '100%', height: '35%' }}>
          <TouchableOpacity style={{ width: '10%', height: '20%', marginTop: 30,position:'absolute',zIndex:1 }} onPress={() => navigation.goBack()}>
            <Icon
              style={{ marginLeft: 10 }}
              name="arrow-left"
              size={25}
              color={'white'}

            />
          </TouchableOpacity>
          <View style={{ height: '100%', backgroundColor: 'grey', justifyContent: 'center',alignItems:'center',zIndex:-99 }}>
            <SliderBox sliderBoxHeight={400} images={showpath} />
          </View>
          <TouchableOpacity
            style={{ width: '10%', height: '10%', justifyContent: 'flex-start', marginLeft: 10, marginTop: -50 }}
          >
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: '60%', height: '100%' }}
                source={require('../../img/WhiteStar.png')}
              />
            </View>
          </TouchableOpacity>

          {/**
            <ImageBackground
                style={{width:'100%',height:'100%',alignItems:'center'}}
                source={require('../../img/Georgie-web.jpg')}
            >
                <View style={{width:'95%',height:'20%',justifyContent:'center',marginTop:20}}>
                    <TouchableOpacity 
                        onPress={() => {navigation.navigate('Tabs')}}>
                        <Icon 
                            name="arrow-left"
                            size={25}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'flex-end',width:'90%',height:'70%'}}>
                    <TouchableOpacity 
                        style={{width:'100%',height:'100%',justifyContent:'flex-end'}} 
                    >
                        <View style={{width:'30%',height:'30%',justifyContent:'center'}}>
                            <Image 
                                style={{width:'25%',height:'50%'}}
                                source={require('../../img/WhiteStar.png')} 
                            />
                        </View>
                        
                    </TouchableOpacity>
                </View>
            </ImageBackground> */}

        </View>

        <View style={{ width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>

          <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
              data={info}
              keyExtractor={item => item.iddoginfo}
              renderItem={({ item }) => (
                <Text key={item} style={styleinfo.headfont}>
                  {item.dogname}
                </Text>
              )}
            />
          </View>




        </View>
        {/** -----------Header------------------ */}





        {/*---------------------------------------------- TopTab------------------------------------------------ */}
        <NetworkContext.Provider value={route.params.dogid}>
          <Top.Navigator
            tabBarOptions={{
              style: {
                shadowColor: 'rgba(58,55,55,0.1)',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 20,
                shadowRadius: 15,
                elevation: 3,
                height: 60,
                justifyContent: 'center',
              }
            }}
          >
            <Top.Screen name="History" component={History}
              options={{
                tabBarLabel: ({ focused }) => (
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#747474',
                      }}
                    >ประวัติ</Text>
                  </View>
                )
              }}
            />
            <Top.Screen name="General" component={General}
              options={{
                tabBarLabel: ({ focused }) => (
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#747474',
                      }}
                    >ลักษณะทั่วไป</Text>
                  </View>
                )
              }}
            />
            <Top.Screen name="Treat" component={Treat}
              options={{
                tabBarLabel: ({ focused }) => (
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#747474',
                      }}
                    >การดูแลรักษา</Text>
                  </View>
                )
              }}
            />
            <Top.Screen name="Suitable" component={Suitable}
              options={{
                tabBarLabel: ({ focused }) => (
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#747474',
                      }}
                    >ผู้เลี้ยงที่เหมาะสม</Text>
                  </View>
                )
              }}
            />
          </Top.Navigator>
        </NetworkContext.Provider>
        {/*---------------------------------------------- TopTab------------------------------------------------ */}

      </>
    );

  }
}

const styleinfo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  frame: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headfont: {
    fontSize: 35,
    color: '#636262',
    marginLeft: 20,
    fontFamily: 'FC_Iconic',
    textAlign: 'center'
  },

});




function History() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);


  useEffect(() => {
    axios.get('http://34.87.28.196/showsingle.php', {
      params: {
        id: dogid
      }
    }
    )
      .then(response => {
        setInfo(response.data);

      });
  })



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
        <View style={styles.container}>

          <ModalPopup visible={visible}>
            <View style={styles.PopupHeader}>
              <View style={styles.popClose}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Icon
                    name='close'
                    size={15}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Image
                  source={{ uri: 'http://34.87.28.196/images/home.png' }}
                  style={{ width: '30%', height: 60 }}
                />
                <Text style={styles.popupFont}>แหล่งกำเนิด</Text>
              </View>
            </View>
            <View style={styles.PopupContent}>
              <ScrollView>
                <FlatList
                  data={info}
                  renderItem={({ item, index }) =>
                    <Text key={index} style={styles.subfont}>
                      {item.origin}
                    </Text>
                  }
                  keyExtractor={item => `key-${item.iddoginfo}`}
                />
              </ScrollView>
            </View>
          </ModalPopup>


          <ModalPopup visible={visible2}>
            <View style={styles.PopupHeader}>
              <View style={styles.popClose}>
                <TouchableOpacity onPress={() => setVisible2(false)}>
                  <Icon
                    name='close'
                    size={15}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Image
                  source={require('../../img/home.png')}
                  style={{ width: '30%', height: 60 }}
                />
                <Text style={styles.popupFont}>ประเภทการใช้งานในอดีต</Text>
              </View>
            </View>
            <View style={styles.PopupContent}>
              <ScrollView>
                <FlatList
                  data={info}
                  renderItem={({ item, index }) =>
                    <Text key={index} style={styles.subfont}>
                      {item.typeuse}
                    </Text>
                  }
                  keyExtractor={item => `key-${item.iddoginfo}`}
                />
              </ScrollView>
            </View>
          </ModalPopup>



          <TouchableOpacity style={{ width: '100%', height: '32%' }} onPress={() => setVisible(true)}>
            <View style={styles.frame}>
              <View style={{ width: '20%' }}>
                <Image
                  style={{ width: '100%', height: '50%', borderRadius: 30 }}
                  source={{ uri: 'http://34.87.28.196/images/home.png' }}
                />
              </View>
              <View style={{ marginLeft: 20, width: '55%' }}>
                <Text style={styles.headfont}>
                  <Text >แหล่งกำเนิด</Text>
                </Text>
              </View>
              <View style={{ width: '10%' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/**------------------------------------------------------------------------------------------- */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
            <View>
            </View>
            <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
          </View>
          {/**------------------------------------------------------------------------------------------- */}


          <TouchableOpacity style={{ width: '100%', height: '32%' }} onPress={() => setVisible2(true)}>
            <View style={styles.frame}>
              <View style={{ width: '20%' }}>
                <Image
                  style={{ width: '100%', height: '50%', borderRadius: 30 }}
                  source={{ uri: 'http://34.87.28.196/images/origin.png' }}
                />
              </View>
              <View style={{ marginLeft: 20, width: '55%' }}>
                <Text style={styles.headfont}> ประเภทการใช้งานในอดีต </Text>
              </View>
              <View style={{ width: '10%' }}>
                <Icons
                  name='keyboard-arrow-right'
                  size={40}
                  color={'#636262'}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}


function General() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);


  useEffect(() => {
    axios.get('http://34.87.28.196/showsingle.php', {
      params: {
        id: dogid
      }
    }
    )
      .then(response => {
        setInfo(response.data);

      });
  })


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
        <ScrollView>
          <View style={stylesGene.container}>
            <ModalPopup visible={visible}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={{ uri: 'http://34.87.28.196/images/home.png' }}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>แหล่งกำเนิด</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>


            <ModalPopup visible={visible2}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible2(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={require('../../img/home.png')}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>ประเภทการใช้งานในอดีต</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>



            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '50%' }}
                    source={require('../../img/cute-siberian-husky-dog-paws-up-wall-cartoon_cut.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}>
                    <Text>ลักษณะนิสัย</Text>
                  </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Image
                    style={{ width: '100%', height: '70%' }}
                    source={require('../../img/dog-icon-vector-19613040.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> ขนาด </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '50%' }}
                    source={require('../../img/earear.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> หู </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '70%' }}
                    source={require('../../img/previewad.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> ลำตัว </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '70%' }}
                    source={require('../../img/depositphotos_384850210-stock-illustration-professional-dog-training-icon-isowesametric.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> หาง </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '70%' }}
                    source={require('../../img/istockphoto-1084516046-612x612.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> ขน </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%' }}>
                  <Image
                    style={{ width: '100%', height: '70%' }}
                    source={require('../../img/yellow.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> สีขน </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </>
    );
  }
}


function Treat() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);


  useEffect(() => {
    axios.get('http://34.87.28.196/showsingle.php', {
      params: {
        id: dogid
      }
    }
    )
      .then(response => {
        setInfo(response.data);

      });
  })


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
        <ScrollView>
          <View style={stylesGene.container}>
            <ModalPopup visible={visible}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={{ uri: 'http://34.87.28.196/images/home.png' }}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>แหล่งกำเนิด</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>


            <ModalPopup visible={visible2}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible2(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={require('../../img/home.png')}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>ประเภทการใช้งานในอดีต</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>



            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/recovery-health-treat-refresh-restoration-512.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}>
                    <Text>การดูแล</Text>
                  </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/62900-200.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> การอาบน้ำ </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/comb.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> การหวีขน </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '100%', height: '55%' }}
                    source={require('../../img/img_74406.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> ออกกำลังกาย </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>

      </>
    );
  }
}


function Suitable() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);


  useEffect(() => {
    axios.get('http://34.87.28.196/showsingle.php', {
      params: {
        id: dogid
      }
    }
    )
      .then(response => {
        setInfo(response.data);

      });
  })


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
        <ScrollView>
          <View style={stylesGene.container}>

            <ModalPopup visible={visible}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={{ uri: 'http://34.87.28.196/images/home.png' }}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>แหล่งกำเนิด</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>


            <ModalPopup visible={visible2}>
              <View style={styles.PopupHeader}>
                <View style={styles.popClose}>
                  <TouchableOpacity onPress={() => setVisible2(false)}>
                    <Icon
                      name='close'
                      size={15}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                  <Image
                    source={require('../../img/home.png')}
                    style={{ width: '30%', height: 60 }}
                  />
                  <Text style={styles.popupFont}>ประเภทการใช้งานในอดีต</Text>
                </View>
              </View>
              <View style={styles.PopupContent}>
                <ScrollView>
                  <FlatList
                    data={info}
                    renderItem={({ item, index }) =>
                      <Text key={index} style={styles.subfont}>
                        {item.typeuse}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </ModalPopup>



            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/yard.jpg')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}>
                    <Text>มีพื้นที่กว้าง</Text>
                  </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/doglover.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> เป็นผู้รักสัตว์ </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '80%', height: '80%' }}
                    source={require('../../img/brushdog.jpg')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> หมั่นดูแลเรื่องขนและกลิ่นตัว </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginLeft: 15, marginTop: 10, marginBottom: 10 }} />
              <View>
              </View>
              <View style={{ flex: 1, height: 2, backgroundColor: '#F6F6F6', marginTop: 10, marginBottom: 10, marginRight: 15 }} />
            </View>
            {/**------------------------------------------------------------------------------------------- */}

            <TouchableOpacity style={{ width: '100%' }} onPress={() => setVisible2(true)}>
              <View style={stylesGene.frame}>
                <View style={{ width: '20%', height: '80%', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../img/dogrun.png')}
                  />
                </View>
                <View style={{ marginLeft: 20, width: '55%' }}>
                  <Text style={stylesGene.headfont}> สามารถพาสุนัขออกกำลังกายทุกวัน </Text>
                </View>
                <View style={{ width: '10%' }}>
                  <Icons
                    name='keyboard-arrow-right'
                    size={40}
                    color={'#636262'}
                  />
                </View>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>

      </>
    );
  }
}

const stylesGene = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  frame: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headfont: {
    fontSize: 30,
    color: '#636262',
    marginLeft: 20,
    fontFamily: 'FC_Iconic'
  }

});


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  frame: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30
  },
  headfont: {
    fontSize: 30,
    color: '#636262',
    fontFamily: 'FC_Iconic'
  },
  subfont: {
    fontSize: 25,
    color: '#636262',
    fontFamily: 'FC_Iconic'
  },
  popupFont: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'FC_Iconic'
  },
  popClose: {
    alignItems: 'flex-end',
    width: '100%',
  },
  PopupHeader: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#555555',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    height: '18%'
  },
  PopupContent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});



