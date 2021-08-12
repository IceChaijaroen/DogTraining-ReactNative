{/*import React, { Component, version } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class Picker extends Component{

    
    state = {
        dog: 'inu'
    }

    render(){

        return(
        <View style={{minHeight: 500}}>
            <DropDownPicker
                items={[
                    {label: 'Begle', value: 'begle' },
                    {label: 'Golden Retriver', value: 'gd'},
                    {label: 'Inu', value: 'inu'},
                ]}
                defaultValue={this.state.dog}
                containerStyle={{height: 30,width:'80%'}}
                style={{backgroundColor: '#fafafa',}}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{backgroundColor: 'white',}}
                onChangeItem={item => this.setState({
                    dog: item.value,
                })}
            />
        </View>
        );
    }
}

export default Picker;*/}

import { View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import React,{ Component}  from 'react';

class Pickerdog extends Component{

    state ={
        dog:'begle'
    }

    render(){
        return(
            <View>
                <Picker style={{width:'70%'}}
                selectedValue={this.state.dog}
                onValueChange={(itemValue,itemIndex)=>this.setState({dog:itemValue})}
                >
                    <Picker.Item label="Begle" value="begle"></Picker.Item>
                    <Picker.Item label="Golden Retriver" value="golden"></Picker.Item>
                </Picker>
            </View>
        );
    }
}
export default Pickerdog;

