import React from 'react';
import { Button, StatusBar,Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HeaderDogtrain({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
                    <Text style={styles.headertext}>ข้อมูลสายพันธุ์สุนัข</Text>
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
        backgroundColor:'#1A508B',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    headertext:{
        fontWeight:'bold',
        fontSize:20,
        color:'white',
        letterSpacing:1,
    }
});