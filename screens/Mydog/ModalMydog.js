import React, { Component } from 'react';
import { View, Text, Modal, Dimensions, Pressable, FlatList, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BottomPopup extends Component {

    static defaultProps = {
        title: '',
        //slide fade  none
        animationType: 'slide',
        haveOutsideTouch: false,
        data: []
    }

    renderItem = ({ item, inde }) => {
        const { disabled } = this.props;
        return (
            <>
                <TouchableOpacity
                    activeOpacity={disabled ? 1 : 0.9}
                    onPress={() => { }}
                    style={{
                        height: 90,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '80%', height: 70, backgroundColor: 'white', elevation: 5, borderRadius: 20, flexDirection: 'row' }}>
                            <View style={{ width: '30%', alignItems: 'center', justifyContent: 'center' }}>
                                <Image 
                                    source={{uri:item.udogimg}}
                                    style={{
                                        width:'60%',
                                        height:'60%'
                                    }}
                                />
                            </View>
                            <View style={{ width: '30%', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#747474' }}>ชื่อ : {item.udogname}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#747474' }}>อายุ : {item.udogbreed}</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#747474' }}>สถานะ : {item.udogstatus}</Text>
                            </View>
                            <View style={{ width: '50%', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 10, height: '20%', color: '#747474' }}>Level : {item.udoglevel}</Text>
                                <View style={{ width: '70%', height: '50%', justifyContent: 'center' }}>
                                    <View >
                                        <Text>this is capsule </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    renderContent = () => {
        const { data } = this.props;
        return (
            <View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={item => `key-${item.id}`}
                />
            </View>
        )
    }

    render() {

        const { show, title, animationType, closePopup, haveOutsideTouch, disabled } = this.props;

        return (
            <Modal
                animationType={animationType}
                transparent={true}
                visible={show}
                onRequestClose={() => { }}
            >
                <View style={{ flex: 1, backgroundColor: '#000000AA' }}>
                    <Pressable
                        onPress={() => {
                            if (!haveOutsideTouch) return;
                            closePopup()
                        }}
                        style={{ flex: 1 }}
                    >
                    </Pressable>
                </View>

                <View style={{
                    bottom: 0,
                    position: 'absolute',
                    width: '100%',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        color: '#182E44',
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 15
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: 100, }}>
                            <View style={{ flex: 1, height: 5, backgroundColor: '#B1B1B1', borderTopStartRadius: 15, borderBottomStartRadius: 15 }} />
                            <View style={{ flex: 1, height: 5, backgroundColor: '#B1B1B1', borderTopEndRadius: 15, borderBottomEndRadius: 15 }} />
                        </View>
                    </Text>
                    {this.renderContent()}
                    <View style={{ width: '100%', alignItems: 'center', height: 60 }}>
                        <View style={{ width: '65%', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity activeOpacity={disabled ? 1 : 0.7} style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: '20%' }}>
                                    <View style={{width:'70%',borderRadius:50,elevation:3,justifyContent:'center',alignItems:'center',height:'60%'}}>
                                        <Icon
                                        name='plus-circle'
                                        size={40}
                                        color={'white'}
                                        backgroundColor={'grey'}
                                    />
                                    </View>
                                    
                                </View>
                                <View style={{ width: '80%', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#555555' }}>เพิ่มสุนัขตัวใหม่</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}


