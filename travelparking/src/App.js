import React, { useEffect, useState } from 'react';
import { StyleSheet, PermissionsAndroid, Platform, Text, View, TextInput } from "react-native";
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState('');

  const handleOnChangeText = (input) => {
    setUserInput(input);
  };

  const handleOnPressLoginButton = () => {
    setIsLoggedIn(true),
    setUserInput('');
  }

  return (
    <View style={styles.container}>
      {
        !isLoggedIn ? (
          <LoginScreen
            onPressLoginButton={handleOnPressLoginButton}
            onTextChange={handleOnChangeText}
            userInput={userInput}
          />
        )
        : (
        <MapScreen
          userInput={userInput}
        />
        )
      }
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
});

export default App;
