import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
  } from 'react-native';
export default class WhiteBoxIT extends React.Component{

    render(){
        return(
          <View>
              <Text>{this.props.title}</Text>
              <TextInput 
                style={{borderColor: 'black', borderWidth:1}} 
                onChangeText={this.props.onChangeText}/>
              <Text>{this.props.textInput}</Text>
              <Button title={'hit'} onPress={this.props.onPressButton} />
          </View>
        )
      }
}