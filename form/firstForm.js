import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,Alert,TextInput,Button, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";

class FirstForm extends Component {

  state = {
    isModalVisible: false,
    task:"",
    date:""
  };
  addTask = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible})
  };
  saveTask = () => {
    const {task,date} = this.state;
    this.setState({ isModalVisible: !this.state.isModalVisible}, Alert.alert(task + "  " + date))
    
  };
  render(){
    return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.text}>ToDoList</Text> 
        <Icon name="pluscircleo" size={35} color="#fff" onPress={this.addTask} />
      </View>
      <Modal isVisible={this.state.isModalVisible} >
        <View>
          <TextInput
            style={{height: 70, fontSize:20, color:'#fff'}}
            placeholder="Task"
            placeholderTextColor='#fff'
            underlineColorAndroid='#00FFFF'
            value={this.state.task}
            onChangeText = { task => this.setState({task})}
          />
          <TextInput
            style={{height: 70, fontSize:20, color:'#fff',marginBottom:20}}
            placeholder="Date"
            placeholderTextColor='#fff'
            underlineColorAndroid='#00FFFF'
            value={this.state.date}
            onChangeText = { date => this.setState({date})}
          />  
        </View>
        <Button title="Add Task" onPress={this.saveTask}/>        
      </Modal>
    </View>
    );
  }
}  

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#808080',
    justifyContent:'space-between',
    flexDirection: 'row',
    padding:20
  },
  text:{
    fontSize:15,
    color:'#fff'
  }, 
  btn:{
    justifyContent:'flex-end'
  }
})

export default FirstForm

