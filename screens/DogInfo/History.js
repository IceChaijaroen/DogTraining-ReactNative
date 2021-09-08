import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, version } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ModalPopup from '../../component/ModalPopup';
import axios from 'axios';

export default function History ({navigation,route}) {
const [visible,setVisible] = useState(false);
const [visible2,setVisible2] = useState(false);
const { dogid } = route.params;
const [info, setInfo] = useState([]);


useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://35.187.253.40/showsingle.php',
        {
          params: {
            id: dogid
          }
        })
        setInfo(response.data)
    } catch (err) {
      alert(err)
    }
  }
  fetchData();
},[info])



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
                  source={{uri:'http://35.187.253.40/images/home.png'}}
                  style={{ width: '30%', height: 60 }}
                />
                <Text style={styles.popupFont}>แหล่งกำเนิด</Text>
              </View>
            </View>
            <View style={styles.PopupContent}>
              <ScrollView>
              
              
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
                {info.map((item, index) => (
                <Text key={index} style={styles.subfont}>
                    {item.typeuse}
                </Text>
                ))}
              </ScrollView>
            </View>
          </ModalPopup>



          <TouchableOpacity style={{ width: '100%', height: '32%' }} onPress={() => setVisible(true)}>
            <View style={styles.frame}>
              <View style={{ width: '20%' }}>
                <Image
                  style={{ width: '100%', height: '50%', borderRadius: 30 }}
                  source={{uri:'http://35.187.253.40/images/home.png'}}
                />
              </View>
              <View style={{ marginLeft: 20, width: '55%' }}>
                <Text style={styles.headfont}> {info.map(item => <Text key={item.iddoginfo}>{item.dogname}</Text>)} </Text>
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
                  source={{uri:'http://35.187.253.40/images/origin.png'}}
                />
              </View>
              <View style={{ marginLeft: 20, width: '55%' }}>
                <Text style={styles.headfont}> ประเภทการใช้งานในอดีต5 </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#636262',
  },
  subfont: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636262',
  },
  popupFont: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
