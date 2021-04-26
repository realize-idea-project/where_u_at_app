import React, { useEffect, useState } from 'react';
import { StyleSheet, PermissionsAndroid, Platform, Text, View, TextInput } from "react-native";
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import { requestLocationPermission } from './shared/requestLocationPermission.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    console.log('permission in App.js');
    requestLocationPermission(PermissionsAndroid);
  }, []);

  const handleOnChangeText = (input) => {
    setUserInput(input);
  };

  const handleOnPressLoginButton = () => {
    setIsLoggedIn(true),
    setUserInput('');
  };

  const handlerOnPressBackButton = () => {
    setIsLoggedIn(false);
  };

  return !isLoggedIn ? (
    <LoginScreen
      onPressLoginButton={handleOnPressLoginButton}
      onTextChange={handleOnChangeText}
      userInput={userInput}
    />
  ) : (
    <MapScreen
      userInput={userInput}
      onPressBackButton={handlerOnPressBackButton}
    />
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
});

export default App;
