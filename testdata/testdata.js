import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import { Input } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from "axios";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function testdata() {
    const [status, setStatus] = useState('Small');
    const [wool, setWool] = useState('Long');
    const [datalist, setDatalist] = useState(data);
    const [Toggle, setToggle] = useState(false);

    const [data, setData] = useState([
        {
            dogname: 'Golden',
            status: 'Medium',
            wool: 'Long',
            img: 'https://www.prestigeanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=scGfz-nI'
        },
        {
            dogname: 'Labrador',
            status: 'Medium',
            wool: 'Long',
            img: 'https://dogfriendlyscene.co.uk/wp-content/uploads/2020/09/chocolate-and-golden-labrador.png?ezimgfmt=ng%3Awebp%2Fngcb11%2Frs%3Adevice%2Frscb11-2'
        },
        {
            dogname: 'Begle',
            status: 'Small',
            wool: 'Short',
            img: 'https://vetstreet-brightspot.s3.amazonaws.com/75/371580ca7a11e0ad9e12313817c323/file/Beagle-1-645mk062311.jpg'
        },
        {
            dogname: 'Saint bernard',
            status: 'Large',
            wool: 'Long',
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F07%2F14%2Fsaint-bernard-sitting-in-park-587356629-2000.jpg'
        }
    ]);

    const listTab = [
        {
            status: 'Small'
        },
        {
            status: 'Medium'
        },
        {
            status: 'Large'
        }
    ]

    const listWool = [
        {
            wool: 'Long'
        },
        {
            wool: 'Short'
        }
    ]



    const setfilter = (status) => {
        if (status !== '') {
            setDatalist([...data.filter(item => item.status === status && item.wool === wool)])
        } else {
            setDatalist(data)
        }
        setStatus(status)
    }

    const setfilterwool = (wool) => {
        if (wool !== '') {
            setDatalist([...data.filter(item => item.wool === wool && item.status === status)])
        } else {
            setDatalist(data)
        }
        setWool(wool)
    }



    return (
        <>
            <View style={{ flex: 1, height: '100%' }}>
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: '8%',
                        marginTop: 50
                    }}>
                    <SearchBar
                        inputStyle={{ backgroundColor: '#575757' }}
                        containerStyle={{ backgroundColor: '#575757', width: '80%', height: 50, borderRadius: 50 }}
                        inputContainerStyle={{ backgroundColor: '#575757', width: '100%', height: "100%" }}
                        placeholder="ค้นหา ...."

                    />
                    <TouchableOpacity onPress={() => setToggle(!Toggle)} style={{ width: '13%', elevation: 8, justifyContent: 'center', alignItems: 'center', backgroundColor: Toggle ? '#555555' : 'white', borderRadius: 50, height: '80%' }}>
                        <FontAwesome5
                            name={'filter'}
                            size={25}
                            color={Toggle ? 'white' : '#555555'}
                        />
                    </TouchableOpacity>
                </View>

                {Toggle ? (
                    <>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: '10%',
                            }}>
                            {listTab.map(item => (
                                <TouchableOpacity
                                    onPress={() => setfilter(item.status)}
                                    style={{
                                        width: '30%',
                                        alignItems: 'center',
                                        backgroundColor: status == item.status ? '#555555' : 'white',
                                        height: 50,
                                        marginRight: 10,
                                        justifyContent: 'center',
                                        elevation: 8,
                                        borderRadius: 8
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: status == item.status ? 'white' : '#555555',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {item.status}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                height: '10%',
                            }}>
                            {listWool.map(item => (
                                <TouchableOpacity
                                    onPress={() => setfilterwool(item.wool)}
                                    style={{
                                        width: '30%',
                                        alignItems: 'center',
                                        backgroundColor: wool == item.wool ? '#555555' : 'white',
                                        height: 50,
                                        marginRight: 10,
                                        justifyContent: 'center',
                                        elevation: 8,
                                        borderRadius: 8
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: wool == item.wool ? 'white' : '#555555',
                                            fontWeight: 'bold'
                                        }}>
                                        {item.wool}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </>
                ) : null}
                <View style={{ width: '100%', height: '55%', justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={datalist}
                        keyExtractor={(e, i) => i.toString()}
                        renderItem={({ item }) => (
                            <>
                                <View style={{ width: '100%' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                        {item.dogname}
                                    </Text>
                                    <View style={{ width: 400, height: 200, backgroundColor: 'yellow', borderRadius: 8, marginBottom: 15 }}>
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 8
                                            }}
                                            source={{ uri: item.img }}
                                        />
                                    </View>
                                </View>


                            </>
                        )}
                    />
                </View>
            </View>

        </>
    )
}
