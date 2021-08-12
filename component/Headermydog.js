import React from 'react';
import { StatusBar,Text, View, StyleSheet, Image } from 'react-native';

export default function Headermydog(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.headertext}>สุนัขของคุณ</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'15%',
        backgroundColor:'white'
    },
   header:{
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#008891',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    headertext:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        letterSpacing:1
    }
});