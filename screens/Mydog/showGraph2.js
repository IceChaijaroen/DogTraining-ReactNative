import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const screenWidth = Dimensions.get("window").width;
import ProgressCircle from 'react-native-progress-circle'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const numColumns = 3

export default function showGraph2({ navigation }) {
  const [exerdog, setExerdog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trainloading, setTrainloading] = useState(false);
  const [idtrain, setIdtrain] = useState(null);
  const [train, setTrain] = useState([]);
  const [udogid, setUdogid] = useState();
  const [user, setUser] = useState();

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
    const fetchData = async () => {
      await AsyncStorage.getItem('udogid')
        .then((value) => {
          setUdogid(value);
        })
    }
    fetchData();
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showstatisexer.php',
          {
            params: {
              idtrain: idtrain,
              uid: user,
              udogid: udogid
            }
          })
        if (response.data == 'null') {
          setExerdog(response.data);
          setLoading(true);
        } else {
          setExerdog(response.data);
          setLoading(true);
        }

      } catch {
        alert("showdoglevel");
      }
    }
    fetchData();
  }, [idtrain])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://35.187.253.40/showdogtrain.php', {
          params: {
            uid: user,
            udogid: udogid
          }
        })
        if (response.data == 'null') {
          alert("train null");
        } else {
          setTrain(response.data);
          setTrainloading(true);
        }
      } catch (err) {
        alert(err)
      }
    }
    fetchData();
  }, [train])



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




  let formatData = (train, numColumns) => {
    const totalRows = Math.floor(train.length / numColumns)
    let totalLastRow = train.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      train.push({ idtrain: 'blank', empty: true })
      totalLastRow++
    }
    return train
  }




  const renderItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={{ backgroundColor: 'transparent' }}></View>
    } else {
      return (
        <View style={{ width: 80, height: 110, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
          <TouchableOpacity
            style={{
              width: '80%',
              height: '54%',
              backgroundColor: idtrain == item.idtrain ? '#555555' : 'white',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
              borderColor: '#555555',
              elevation: 5,
            }}
            key={item.idtrain}
            active={idtrain === item.idtrain}
            onPress={() => setIdtrain(item.idtrain)}
          >
            <ProgressCircle
              percent={item.sumstep * 100 / 20}
              radius={40}
              borderWidth={4}
              color={item.sumstep >= 20 ? '#79E386' : '#FFBE4F'}
              shadowColor="#B8B8B8"
              bgColor={idtrain == item.idtrain ? '#838383' : '#FFFFFF'}
            >
              <Image
                style={{
                  width: '50%',
                  height: '50%'
                }}
                source={{ uri: item.trainimg }}
              />


            </ProgressCircle>
            <View style={{ width: '100%', height: 20, alignItems: 'center' }}>
              <Text style={{ color: '#555555', fontSize: 16, textAlign: 'center', fontFamily: 'FC_Iconic', paddingTop: 5 }}>{item.trainname}</Text>
            </View>

          </TouchableOpacity>
        </View>
      )
    }
  }

  return (
    <>
      {/* -------------------------------Header----------------------------------------- */}
      <View style={styles.header}>
        <View style={{ width: '45%', flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={25}
              color={'white'}

            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 15, fontSize: 27, color: 'white', fontFamily: 'FC_Iconic' }}>สถิติแต่ละท่า</Text>
        </View>
        <View style={{ width: '45%', alignItems: 'flex-end', }}>


        </View>
      </View>
      {/* -------------------------------Header----------------------------------------- */}



      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={{ padding: 30, width: '90%' }}>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32, fontFamily: 'FC_Iconic', color: '#575757' }}>สถิติแต่ละท่า</Text>
                <FlatList
                  data={formatData(train, numColumns)}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={numColumns}
                />
              </View>


              {loading ? (
                <>
                  {exerdog == 'null' ? (
                    <>
                      {idtrain == null ? (
                        <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#AFAFAF' }}>ยังไม่มีข้อมูลสถิติ</Text>
                        </View>
                      ) : (
                        <View style={{ width: '100%', height: 100, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={{ fontFamily: 'FC_Iconic', fontSize: 30, color: '#AFAFAF' }}>ยังไม่มีข้อมูลสถิติ</Text>
                        </View>
                      )}

                    </>
                  ) : (
                    <>
                      <ScrollView style={{ width: '100%' }} horizontal={true}>
                        <View style={{ width: '100%', height: 350, alignItems: 'center', }}>
                          <LineChart
                            data={{
                              labels: exerdog.map(item => ('ครั้งที่ ' + item.count)),
                              datasets: [
                                {
                                  data: exerdog.map(item => (item.seconds)),
                                  color: (opacity = 1) => `rgba(166, 206, 227)`, // optional
                                  strokeWidth: 2 // optional
                                }
                              ],
                              legend: ["Dog stastic"] // optional
                            }}
                            width={'1200'}
                            height={290}
                            verticalLabelRotation={50}
                            chartConfig={chartConfig}
                            bezier
                            yAxisSuffix=""
                          />
                        </View>
                      </ScrollView>
                      <View style={{ width: '100%' }}>
                        <Text style={{ fontFamily: 'FC_Iconic', fontSize: 16, color: '#9F9F9F' }}>*แกน x = จำนวนครั้ง</Text>
                        <Text style={{ fontFamily: 'FC_Iconic', fontSize: 16, color: '#9F9F9F' }}>*แกน y = เวลา(วินาที)</Text>
                      </View>
                    </>
                  )}
                </>
              ) : (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <ActivityIndicator size="large" color="#FFB97D" />
                </View>
              )}



            </View>
          </View>
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
    marginTop: 10,
    marginBottom: 10
  },
  card: {
    alignItems: 'center',
    width: '90%',
    height: '100%',
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
    elevation: 5
  },
  button2: {
    borderRadius: 30,
    backgroundColor: 'white',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  buttontext: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'FC_Iconic'
  },
  buttontext2: {
    color: '#555555',
    fontSize: 15,
    fontFamily: 'FC_Iconic'
  },
  header: {
    width: '100%',
    height: 80,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008891',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6
  },

});
