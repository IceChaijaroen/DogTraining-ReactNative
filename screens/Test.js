import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Opendrawer from '../component/OpenDrawer';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';



export default function Test() {

  let [fontsLoaded] = useFonts({
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    'bahnschrift': require('../assets/fonts/bahnschrift.ttf'),
    'FCIconic': require('../assets/fonts/FC_Iconic_Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <>
        <View style={styles.container}>
          <Text style={{fontSize:30, fontFamily:'FCIconic'}}>ทดสอบ</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  imgsize: {
    width: 40,
    height: 40,
  }
});
