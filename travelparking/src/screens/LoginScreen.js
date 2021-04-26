import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import Blank from '../components/Blank';
import LoginButton from '../components/Button/LoginButton';

const LoginScreen = ({ onPressLoginButton, onTextChange, userInput }) => {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titleText}>
          트래블 파킹
        </Text>
        <Blank size={40} />
        <TextInput
          autoFocus
          value={userInput}
          style={styles.textInput}
          onChangeText={onTextChange}
        />
        <Blank size={10} />
        <Text style={{ fontSize: 20}}>이름을 입력 해주세요</Text>
        <Blank size={40} />
        <LoginButton onPress={onPressLoginButton}/>
      </View>
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
