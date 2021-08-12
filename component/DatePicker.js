import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'


export default class MyDatePicker extends Component {
    constructor(props){
      super(props)
      this.state = {date:new Date()}
    }
   
    render(){
      return (
        <DatePicker
          style={{width: '80%'}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="-10Y"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position:'relative',
              left: 0,
              top: 0,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 0
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
      )
    }
  }