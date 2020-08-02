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

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      text: 'react native'
    }
    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleTextInput(txt){
    this.setState({text:txt})
  }
  handleButtonClick(){
      this.setState({text: 'White Box - IT'})
  }
  render(){
    return(
      <View style={{padding: 8}}>
        <Text>CC-CHANCHAI</Text>
        <TextInput style={{borderColor: 'black', borderWidth:1}} onChangeText={this.handleTextInput}/>
        <Text>{this.state.text}</Text>
        {/* <Button title={"set 'White box IT'"} onPress={() => this.setState({text: 'White Box - IT'})}></Button> */}
        <Button title={"set 'White Box - IT'"} onPress={this.handleButtonClick}/>
      </View>
    )
  }
}