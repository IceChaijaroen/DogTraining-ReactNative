import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
export const NetworkContext = React.createContext();
import axios from 'axios';


export default function Treat() {
  const [info, setInfo] = useState([]);
  const dogid = React.useContext(NetworkContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://34.87.28.196/showsingle.php',
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
    <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity>
            <View style={styles.frame}>
                <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end'}}>
                  <Image 
                    style={{width:'50%',height:'70%',}}
                    source={require('../../img/recovery-health-treat-refresh-restoration-512.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                  {info.map(item => {
                    <Text style={styles.headfont}>{item.dogname}</Text>
                  })}
                    
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
                    style={{width:'60%',height:'70%'}}
                    source={require('../../img/62900-200.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>การอาบน้ำ</Text>
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
                    style={{width:'70%',height:'75%'}}
                    source={require('../../img/comb.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>การหวีขน</Text>
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
                    style={{width:'85%',height:'60%'}}
                    source={require('../../img/img_74406.png')}
                  />
                </View>
                <View style={{width:'60%',height:'100%',justifyContent:'center'}}>
                    <Text style={styles.headfont}>ออกกำลังกาย</Text>
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
