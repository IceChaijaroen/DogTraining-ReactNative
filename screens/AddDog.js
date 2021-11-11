import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Pickersex from '../component/Pickersex';
import MyDatePicker from '../component/DatePicker';
import DatePicker from 'react-native-datepicker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Modalinsertdog from './Modalinsertdog';
import Icon from 'react-native-vector-icons/AntDesign';
import IconImg from 'react-native-vector-icons/Entypo';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

export default function AddDog({ navigation }) {
  const [pickbreed, setPickbreed] = useState('Golden Retriver');
  const [sex, setSex] = useState('ผู้');
  const [birthday, setBirthday] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [user, setUser] = useState();
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [visiblefail, setVisiblefail] = useState(false);
  const [check, setCheck] = useState();
  const [image, setImage] = useState(null);


  const breed = ['โกลเด้น รีทรีฟเวอร์ (Golden retriever)', 'ลาบราเดอร์ รีทรีฟเวอร์ (Labrador Retriver)', 'บีเกิ้ล (Begle)', 
  'พ็อมโบรค เวล์ช คอร์กี้ (Pembroke Welsh Corgi)',
  'ชิบะ อินุ (Shiba Inu)','เซนต์เบอร์นาร์ด (St. Bernard)','ไซบีเรียน ฮัสกี (Siberian Husky)'
];

  //------------------------------------Image Picker-------------------------------------------
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
    const base = 'data:image/jpeg;base64,'
    if (!result.cancelled) {
      setImage(base + base64);
    }
  };
  //-----------------------------------------------------------------------------------------------



  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.getItem('id')
        .then((value) => {
          setUser(value);
        })
    }
    fetchData();
  })


  useEffect(() => {
    const authenticate = async () => {
      axios.post("http://35.187.253.40/insertdog.php",
        JSON.stringify({
          user: user,
          name: name,
          breed: pickbreed,
          sex: sex,
          birthday: birthday,
          img: image
        })
      )
        .then((response) => {
          if (response.data == "OK") {
            setConfirm(false);
            setPickbreed('Golden Retriver');
            setSex('ผู้');
            setBirthday('');
            setName('');
            setImage(null);
            setVisible(true);
          } else {
            setVisiblefail(true);
            setConfirm(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }; if (confirm) authenticate();
  }, [confirm]);

  {/** useEffect(() => {
    let interval = null;
    if (visible) {
        interval = setInterval(() => {
            setPersecound(perseconds => perseconds - 1)
        }, 1000);
    } else {
        clearInterval(interval)
    }
    return () => clearInterval(interval)
}, [visible]) */}
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

        <Modalinsertdog visible={visiblefail}>
          <View style={styles.PopupContent}>
            <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name={'closecircle'}
                size={120}
                color={'red'}

              />
            </View>
            <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>บันทึกข้อมูลไม่สำเร็จ </Text>
            </View>
            <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setVisiblefail(false)} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5 }}>
                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalinsertdog>

        <Modalinsertdog visible={visible}>
          <View style={styles.PopupContent}>
            <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Icon
                name={'checkcircle'}
                size={120}
                color={'#79E386'}

              />
            </View>
            <View style={{ height: '25%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: '#B0B0B0' }}>บันทึกข้อมูลเสร็จสิ้น </Text>
            </View>
            <View style={{ width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setVisible(false)} style={{ width: '40%', height: '80%', backgroundColor: '#FEC043', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginRight: 10 }}>
                <Text style={{ fontSize: 22, fontFamily: 'FC_Iconic', color: 'white' }}>เพิ่มสุนัขอีก</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ width: '40%', height: '80%', backgroundColor: '#79E386', borderRadius: 40, justifyContent: 'center', alignItems: 'center', elevation: 5, marginLeft: 10 }}>
                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', color: 'white' }}>ถัดไป</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modalinsertdog>



        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{ width: '40%', alignItems: 'flex-end' }}>
              <Image
                style={{ width: 50, height: '58%' }}
                source={require('../img/LOGOcomwhite.png')}
              />
            </View>
            <View style={{ width: '60%', alignItems: 'flex-start', marginLeft: 15 }}>
              <Text style={styles.headertext}>Dog Trainning</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.textadd}>
              <Text style={styles.fontadd}>เพิ่มสุนัขของคุณ</Text>
            </View>
            <View style={styles.card}>

              <View style={{ margin: 30 }}>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                  <View style={{ width: '50%', alignItems: 'center' }}>
                    {image == null ? (
                      <>
                        <TouchableOpacity style={{ width: 90, height: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EEEEEE', borderRadius: 50 }} onPress={pickImage}>
                          <IconImg
                            name='image'
                            color={'grey'}
                            size={20}
                          />
                          <Text style={{ fontFamily: 'FC_Iconic', fontSize: 18, color: 'grey' }}> เลือกรูปภาพ </Text>
                        </TouchableOpacity>
                      </>
                    ) : (
                      <>
                        <TouchableOpacity onPress={pickImage}>
                          <Image source={{ uri: image }} style={{ width: 90, height: 90, borderRadius: 50 }} />
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  <View style={{ width: '50%' }}>
                    <Text style={{ fontFamily: 'FC_Iconic', fontSize: 22 }}>ชื่อ</Text>
                    <View>
                      <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder={'กรอกชื่อสุนัข'}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ alignItems: 'flex-end' }}>
                  <View style={{ flexDirection: 'row', marginBottom: 20, width: '90%' }}>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontFamily: 'FC_Iconic', fontSize: 22 }}>สายพันธุ์</Text>
                      <View>
                        <Picker style={{ width: '80%', color: '#555555' }}
                          selectedValue={pickbreed}
                          onValueChange={(itemValue) => setPickbreed(itemValue)}
                        >
                          {breed.map((item, key) => (
                            <Picker.Item label={item} value={item} key={key}></Picker.Item>
                          ))}

                        </Picker>
                      </View>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={{ fontFamily: 'FC_Iconic', fontSize: 22 }}>เพศ</Text>
                      <View>

                        <Picker style={{ width: '80%', color: '#555555' }}
                          selectedValue={sex}
                          onValueChange={(itemValue) => setSex(itemValue)}
                        >
                          <Picker.Item label={'ผู้'} value={'ผู้'} ></Picker.Item>
                          <Picker.Item label={'เมีย'} value={'เมีย'} ></Picker.Item>
                        </Picker>
                      </View>
                    </View>
                  </View>
                  <View style={{ width: '90%' }}>
                    <View style={{ marginBottom: 10 }}>
                      <Text style={{ fontFamily: 'FC_Iconic', fontSize: 22 }}>วันเกิด</Text>
                    </View>
                    <DatePicker
                      style={{ width: '80%' }}
                      date={birthday}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate="-10Y"
                      maxDate={new Date()}
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'relative',
                          left: 0,
                          top: 0,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 0
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => setBirthday(date)}
                    />
                  </View>
                </View>
                <View style={{ width: 300, height: 60, alignItems: 'center', marginTop: 5 }}>
                  <TouchableOpacity onPress={() => { setConfirm(true); }} style={{ width: 100, flexDirection: 'row', height: 40, justifyContent: 'flex-end', alignItems: 'center', marginTop: 15, backgroundColor: '#79E386', borderRadius: 20, elevation: 5 }}>
                    <View style={{ width: '50%', alignItems: 'center' }}>
                      <Text style={{ color: 'white', fontFamily: 'FC_Iconic', fontSize: 16 }}>ยืนยัน</Text>
                    </View>

                    <View style={{ width: '40%', }}>
                      <Icon
                        name='checkcircle'
                        color={'white'}
                        size={20}
                      />
                    </View>
                  </TouchableOpacity>
                </View>


              </View>

            </View>
            <View style={{ width: '95%', alignItems: 'center', height: 180, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ width: 100, height: 40, marginBottom: 20 }}>
                <View style={styles.nextbutton}>
                  <Text style={styles.textinbutton} >ถัดไป</Text>
                  <FontAwesome5
                    name='arrow-right'
                    color={'white'}
                  />
                </View>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1F1F1'
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
    fontFamily: 'FC_Iconic',
    fontSize: 28,
    color: 'white',
    letterSpacing: 1,
  },
  textadd: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontadd: {
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    fontSize: 40,
    color: 'white',
    fontFamily: 'FC_Iconic'
  },
  card: {
    alignItems: 'center',
    width: '90%',
    height: 400,
    backgroundColor: 'white',
    borderRadius: 50,
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
  PopupHeader: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#555555',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    height: '19%',
    backgroundColor: '#FE4343'
  },
  PopupContent: {
    width: '100%',
    alignItems: 'center',
    height: 350,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  nextbutton: {
    width: '100%',
    backgroundColor: '#555555',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5
  },
  textinbutton: {
    fontFamily: 'FC_Iconic',
    fontSize: 22,
    color: 'white',
    marginRight: 10
  }
});

