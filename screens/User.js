import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function User() {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  imgsize:{
    width: 40,
    height:40,
  }
});
