import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Input } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from "axios";

export default function testdata() {
    const [image, setImage] = useState(null);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            axios.post("http://35.187.253.40/insertdog.php",
                JSON.stringify({
                    user: 1,
                    name: 'BUBU',
                    breed: 'GGGG',
                    sex: 'ผู้',
                    birthday: '2021-05-08',
                    img: image
                })
            )
                .then((response) => {
                    if (response.data == "OK") {
                        alert('OK')
                        setConfirm(false);
                    } else {
                        alert('fail')
                        setConfirm(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }; if (confirm) authenticate();
    }, [confirm]);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
        console.log(base64);
        const base = 'data:image/jpeg;base64,'
        if (!result.cancelled) {
            setImage(base + base64);
        }
    };


    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={pickImage}>
                    <Text>เลือกภาพ</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <TouchableOpacity onPress={() => setConfirm(true)}>
                    <Text style={{fontSize:50}}>อัพเดทข้อมูล</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}
