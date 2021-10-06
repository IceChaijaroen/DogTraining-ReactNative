import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default function Help(props,disabled) {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
            <View style={{width:'100%',marginLeft:20}}>
                <TouchableOpacity 
                    onPress={() => {props.navigation.goBack()}}>
                    <Icon
                        name="arrow-left"
                        size={25}
                        color={'white'}
                    
                    />
                </TouchableOpacity>
            </View>
            <View style={{width:'100%',alignItems:'center'}}>
                <Text style={styles.headertext}>ช่วยเหลือ</Text>
            </View>
        </View>
        <View style={styles.twoblock}>
            <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity 
                activeOpacity={disabled ? 0.9 : 1}
                style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.card}>
                        <View style={styles.imagecontent}>
                            <Image
                                style={{width:'100%',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
                                source={require('../img/syb8ih.jpg')}
                            />
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'25%'}}>
                            <Text style={{fontWeight:'bold',color:'#A2A2A2'}}>
                                    การใช้คลิ๊กเกอร์
                            </Text>
                        </View>   
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity 
                activeOpacity={disabled ? 0.9 : 1}
                style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.card}>
                        <View style={styles.imagecontent}>
                            <Image
                                style={{width:'100%',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
                                source={require('../img/20170719-SniffyKarlo-5ab95d67954cb__880.jpg')}
                            />
                        </View>
                        <View style={styles.textcontent}>
                            <Text style={{fontWeight:'bold',color:'#A2A2A2'}}>
                                    รู้จักกับอารมณ์สุนัข
                            </Text>
                        </View>   
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.twoblock}>
            <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
                activeOpacity={disabled ? 0.9 : 1}
                style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.card}>
                        <View style={styles.imagecontent}>
                            <Image
                                style={{width:'100%',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
                                source={require('../img/สุนัขเห่ามากเกินไป.jpg')}
                            />
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'100%',height:'25%'}}>
                            <Text style={{fontWeight:'bold',color:'#A2A2A2',textAlign: 'center'}}>
                                สัญญาณอาการต่างๆของสุนัขที่คุณต้องรู้
                            </Text>
                        </View>   
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
                activeOpacity={disabled ? 0.9 : 1}
                style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.card}>
                        <View style={styles.imagecontent}>
                            <Image
                                style={{width:'100%',height:'100%',borderTopLeftRadius:15,borderTopRightRadius:15}}
                                source={require('../img/4036d1a77bced53b08b5301bf52e8fb0.jpg')}
                            />
                        </View>
                        <View style={styles.textcontent}>
                            <Text style={{fontWeight:'bold',color:'#A2A2A2'}}>
                                    การใช้เชือก
                            </Text>
                        </View>   
                    </View>
                </TouchableOpacity>
            </View>
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
    height:'15%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#30475E',
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
  twoblock:{
    width:'100%',
    height:'22%',
    flexDirection:'row',
    marginTop:30,
  },
  headertext:{
    fontWeight:'bold',
    fontSize:25,
    color:'white',
    letterSpacing:1,
},
    card:{
        backgroundColor:'white',
        width:'80%',
        height:'100%',
        borderRadius:15,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset:{
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 6
    },
    imagecontent:{
        width:'100%',
        height:'75%',
        backgroundColor:'white',
        justifyContent:'center',
        borderRadius:15,
        alignItems:'center'
    },
    textcontent:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'25%'
    }
});
