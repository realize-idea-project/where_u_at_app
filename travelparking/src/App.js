import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Image, ImageBackground, PermissionsAndroid, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";


const App = () => {

  useEffect(() => {
    

  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>
          index
        </Text>
      </View>
    </SafeAreaView>
  );
};

async function requestLocationPermission() {
  if (Platform.OS !== 'android') return;
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
              title: 'Location Permission',
              message: 'show my location need Location permission',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
      } else {
          console.log('Location permission denied');
      }
  } catch (err) {
      console.warn(err);
  }
}

const styles = StyleSheet.create({
 
});

export default App;
