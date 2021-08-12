import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
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
const screenWidth = Dimensions.get("window").width;

export default function MydogInfo({ navigation }) {
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

          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('showGraph')} style={{ width: '100%' }}>
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontFamily: 'FC_Iconic', marginRight: 20, color: '#555555' }}>สถิติโดยรวม</Text>
                <Image
                  source={require('../../img/allgraph.png')}
                  style={{
                    width: 100,
                    height: 50,
                    marginRight:'5%'
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
                    marginRight:'5%'
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
