import { View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import React,{ Component}  from 'react';


class Pickersex extends Component{

    state ={
        sex:'boy'
    }

    render(){
        return(
            <View>
                <Picker style={{width:'80%'}}
                selectedValue={this.state.sex}
                onValueChange={(itemValue,itemIndex)=>this.setState({sex:itemValue})}
                >
                    <Picker.Item label="ผู้" value="boy"></Picker.Item>
                    <Picker.Item label="เมีย" value="girl"></Picker.Item>
                </Picker>
            </View>
        );
    }
}
export default Pickersex;