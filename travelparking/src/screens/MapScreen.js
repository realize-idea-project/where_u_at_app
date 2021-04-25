import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import Blank from '../components/Blank';
import LoginButton from '../components/Button/loginButton';

const LoginScreen = ({ onPressLoginButton, onTextChange, userInput }) => {

  return (
    <View style={styles.inputContainer}>
      <Text> mhap</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  inputContainer: {
    backgroundColor: 'yellowgreen',
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 32,
  },
  textInput: {
    borderWidth: 2,
    backgroundColor: 'white',
    width: 250,
    height: 80,
  }
});

export default LoginScreen;
