import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class SecondForm extends Component {
  render(){
    return (
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
    );
  }
}

export default SecondForm

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})




