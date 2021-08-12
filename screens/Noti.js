import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Feather, FontAwesome5, Fontisto } from '@expo/vector-icons';


export default function Noti({navigation}) {
  return (
    <View style={styles.container}>

      {/* -------------------------------Header----------------------------------------- */}
      <View style={styles.header}>
                <View style={{ width: '45%', flexDirection: 'row' }}>
                    <TouchableOpacity

                        onPress={() => navigation.navigate('Tabs')}>
                        <Icon
                            name="arrow-left"
                            size={30}
                            color={'white'}

                        />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 15, fontSize: 20, color: 'white', fontWeight: 'bold' }}>ข้อมูลผู้ใช้</Text>
                </View>
                <View style={{ width: '45%', alignItems: 'flex-end', }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <Fontisto
                            name="bell-alt"
                            size={20}
                            color={'white'}
                        />
                    </TouchableOpacity>

                </View>
            </View>
            {/* -------------------------------Header----------------------------------------- */}

        <View style={styles.notiground}>
          <View style={{justifyContent:'center',height:'100%',marginLeft:30}}>
              <Text style={{fontWeight:'bold',fontSize:18,color:'#747474'}}>เย้ๆๆ ถึงเวลาพาไปอาบน้ำแย้ววว</Text>
              <Text style={{marginTop:10,color:'#E3E3E3',fontWeight:'bold'}}>05/05/2564 20:25</Text>
          </View>
        </View>
        <View style={styles.notiground}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  imgsize:{
    width: 40,
    height:40,
  },
  header:{
    width:'100%',
    height:80,
    marginTop: 20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#555555',
    shadowColor:'#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  notiground:{
    backgroundColor:'white',
    width:'100%',
    height:'15%',
    borderBottomColor:'#F6F6F6',
    borderBottomWidth:2
  }
});
