import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions } from 'react-navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';

const screenWidth = Dimensions.get("window").width;

export default function MydogInfo({ navigation }) {
  const [udata, setUdata] = useState([]);
  const [user, setValue] = useState([]);
  const [getudog, setGetudog] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('id')
      .then((value) => {
        setValue(value);
      })
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showudogid.php', {
          params: {
            id: user,
            udogid: getudog
          }
        })
        setUdata(response.data);
        setIsLoading(true);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/getudogid.php', {
          params: {
            id: user
          }
        })
        setGetudog(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [getudog])



  const [text, onChangeText] = React.useState("น้องโบ้");
  const alldata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Dog stastic"] // optional
  };

  const eachdata = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 10, 50, 77, 5, 66],
        color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Dog stance stastic"] // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "#000000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(163, 163, 163, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {udata == 'null' ? (

            <TouchableOpacity onPress={() => navigation.navigate('AddDog')} style={styles.cardinsert}>

              <View style={{ width: '80%', height: '50%', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10 }}>
                <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#555555' }}>เพิ่มสุนัขของคุณ</Text>
              </View>
              <View style={{ width: '80%', height: '50%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Icon
                  name={'pluscircle'}
                  size={50}
                  color={'#555555'}
                />
              </View>
            </TouchableOpacity>

          ) : (
            <>
              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('showGraph', setIsLoading(false))} style={{ width: '100%' }}>
                  <View style={{ width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', marginRight: 20, color: '#555555' }}>พัฒนาการโดยรวม</Text>
                    <Image
                      source={require('../../img/allgraph.png')}
                      style={{
                        width: 100,
                        height: 50,
                        marginRight: '5%'
                      }}
                    />
                    <MaterialCommunityIcons
                      name='arrow-right-drop-circle'
                      size={20}
                      color={'#555555'}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.card}>
                <TouchableOpacity onPress={() => navigation.navigate('showGraph2')} style={{ width: '100%' }}>
                  <View style={{ width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', marginRight: 20, color: '#555555' }}>สถิติแต่ละท่า</Text>
                    <Image
                      source={require('../../img/eachgraph.png')}
                      style={{
                        width: 100,
                        height: 50,
                        marginRight: '5%'
                      }}
                    />
                    <MaterialCommunityIcons
                      name='arrow-right-drop-circle'
                      size={20}
                      color={'#555555'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
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
    marginTop: 30,
    marginBottom: 100,
  },
  card: {
    alignItems: 'center',
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 40,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  cardinsert: {
    marginTop: -10,
    alignItems: 'center',
    width: '90%',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 50,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },
  rowcontent: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#838383',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12
  }

});
