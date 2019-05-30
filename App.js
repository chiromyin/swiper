import React, { Component } from 'react';
import FirstForm from './form/firstForm';
import SecondForm from './form/secondForm';
import Swiper from 'react-native-swiper';

class App extends Component {
  render(){
    return (
      <Swiper>
        <FirstForm />
        <SecondForm />
      </Swiper>
    );
  }
}

export default App
