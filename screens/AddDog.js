import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';

import Pickerdog from '../component/Picker';
import Pickersex from '../component/Pickersex';
import MyDatePicker from '../component/DatePicker';

export default function AddDog({navigation}) {
  const [text, onChangeText] = React.useState("น้องโบ้");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <View style={{width:'40%',alignItems:'flex-end'}}>
              <Image 
                style={{width:50,height:'58%'}}
                source={require('../img/LOGOcomwhite.png')} 
              />
            </View>
            <View style={{width:'60%',alignItems:'flex-start',marginLeft:15}}>
                <Text style={styles.headertext}>Dog Trainning</Text>
            </View>
        </View>
        <ScrollView>
        <View style={styles.textadd}>
            <Text style={styles.fontadd}>เพิ่มสุนัขของคุณ</Text>
        </View>
        <View style={styles.card}>
          <View style={{margin:30}}>
            <View style={{flexDirection:'row',marginBottom:20}}>
              <View style={{width:'50%',alignItems:'center'}}>
                <Image 
                  style={{width:80,height:80}}
                  source={require('../img/dog.png')} 
                />
              </View>
              <View style={{width:'50%'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>ชื่อ</Text>
                <View>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                </View>
              </View>
            </View>
            <View style={{alignItems:'flex-end'}}>
            <View style={{flexDirection:'row',marginBottom:20,width:'90%'}}>
              <View style={{width:'50%'}}>
              <Text style={{fontWeight:'bold',fontSize:18}}>สายพันธุ์</Text>
                <View>
                <Pickerdog />
                </View>
              </View>
              <View style={{width:'50%'}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>เพศ</Text>
                <View>
                <Pickersex/>
                </View>
              </View>
            </View>
            <View style={{width:'90%'}}>
              <View style={{marginBottom:10}}>
                <Text style={{fontWeight:'bold',fontSize:18}}>วันเกิด</Text>
              </View>
                <MyDatePicker/>
            </View>
            </View>
          </View>
        </View>
        <View style={{width:'100%',alignItems:'center',marginTop:20}}>
        <Button
          onPress={() => navigation.navigate('MyDrawer')}
          title="Go to the hell"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
          <Image
            style={{width:50,height:49,marginBottom:10}}
            source={require('../img/plusgreen.png')} 
          />
        </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#F1F1F1'
},
  header:{
    width:'100%',
    height:'15%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#555555',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor:'#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  headertext:{
    fontWeight:'bold',
    fontSize:20,
    color:'white',
    letterSpacing:1,
  },
  textadd:{
    width:'100%',
    height:80,
    alignItems:'center',
    justifyContent:'center',
  },
  fontadd:{
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    fontSize:30,
    color:'white',
    fontWeight:'bold'
  },
  card:{
    alignItems: 'center',
    width:'90%',
    height:330,
    backgroundColor:'white',
    borderRadius:30,
    margin:20,
    shadowColor:'#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
   },
});

