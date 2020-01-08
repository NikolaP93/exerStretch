import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Font from 'expo-font';
import Header from './components/Header'
import TimeQuery from './components/TimeQuery';

export default function App() {

  // hide keyboard if user clicks anywhere
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <DismissKeyboard>
      <ImageBackground source={require('./assets/yoga.jpg')} style={styles.image}>
        <Header />
        <TimeQuery />
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({

  image: {
    width: null,
    height: null,
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center'
  }
});
