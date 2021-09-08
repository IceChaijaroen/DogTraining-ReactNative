import React, {  useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';

//npm install axios --save
import axios from 'axios';

export default function Test2 () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [isSubmit, setIsSubmit] = useState(false);

    useEffect(() => {
        const authenticate = async () => {
            axios
                .post(
                    "http://35.187.253.40/insert.php",
                    JSON.stringify({
                        name: name,
                        email: email
                    })
                )
                .then((response) => {
                    console.log(response.data);
                    setIsSubmit(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        if (isSubmit) authenticate();
    }, [isSubmit]);

    const usernameHandler = (text) => {
        setName(text);
    };

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text>Name : </Text>
            <TextInput
                style={{width:'50%',height:'50%',margin: 12,borderWidth: 1,}}
                onChangeText={usernameHandler}
            />
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text>Email : </Text>
            <TextInput
                style={{width:'50%',height:'50%',margin: 12,borderWidth: 1,}}
                onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity
            style={{backgroundColor:'grey',width: '30%',height:'5%',justifyContent:'center',alignItems:'center'}}
            title={"Go to the hell"}
            onPress={() => setIsSubmit(true)}
          >
              <Text>Go to the hell</Text>
          </TouchableOpacity>
         
      </View>
    );
  }

const styles = StyleSheet.create({

});


