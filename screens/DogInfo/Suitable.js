import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function Suitable() {
  
  return (
    <>
    <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.frame}>
                <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
                  <Image 
                    style={{width:'80%',height:'70%',borderRadius:20}}
                    source={require('../../img/yard.jpg')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>มีพื้นที่กว้าง</Text>
                </View>
                <View style={{width:'10%',height:'100%',justifyContent:'center'}}>
                    <Icons 
                        name='keyboard-arrow-right'
                        size={40}
                        color={'#636262'}
                    />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginLeft:15,marginTop:10,marginBottom:10}} />
                  <View>
                  </View>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginTop:10,marginBottom:10,marginRight:15}} />
              </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity>
              <View style={styles.frame}>
                <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
                  <Image 
                    style={{width:'70%',height:'70%'}}
                    source={require('../../img/doglover.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>เป็นผู้รักสัตว์</Text>
                </View>
                <View style={{width:'10%',height:'100%',justifyContent:'center'}}>
                    <Icons 
                        name='keyboard-arrow-right'
                        size={40}
                        color={'#636262'}
                    />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginLeft:15,marginTop:10,marginBottom:10}} />
                  <View>
                  </View>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginTop:10,marginBottom:10,marginRight:15}} />
              </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity>
              <View style={styles.frame}>
                <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
                  <Image 
                    style={{width:'70%',height:'75%',borderRadius:20}}
                    source={require('../../img/brushdog.jpg')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>หมั่นดูแลเรื่องขนและกลิ่นตัว</Text>
                </View>
                <View style={{width:'10%',height:'100%',justifyContent:'center'}}>
                    <Icons 
                        name='keyboard-arrow-right'
                        size={40}
                        color={'#636262'}
                    />
                </View>
              </View>
            </TouchableOpacity>


            {/**------------------------------------------------------------------------------------------- */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginLeft:15,marginTop:10,marginBottom:10}} />
                  <View>
                  </View>
                  <View style={{flex: 1, height: 2, backgroundColor: '#F6F6F6',marginTop:10,marginBottom:10,marginRight:15}} />
              </View>
            {/**------------------------------------------------------------------------------------------- */}


            <TouchableOpacity>
              <View style={styles.frame}>
                <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
                  <Image 
                    style={{width:'60%',height:'60%'}}
                    source={require('../../img/dogrun.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>สามารถพาสุนัขออกกำลังกายทุกวัน</Text>
                </View>
                <View style={{width:'10%',height:'100%',justifyContent:'center'}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  frame:{
    width:'100%',
    height:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  headfont:{
    fontSize:20,
    fontWeight:'bold',
    color:'#636262',
    marginLeft:20
  }
});
