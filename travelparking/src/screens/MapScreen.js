import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import Blank from '../components/Blank';
import BackButton from '../components/Button/BackButton';
import MapView from '../components/Map';
import io from 'socket.io-client';
import Geolocation from '@react-native-community/geolocation';


const mock = {
  latitude: 37.551131,
  longitude: 126.9153572
}

const getCurrentLocation = (coords, userInput) => ({
  id: userInput,
  location: {
    latitude: coords.latitude,
    longitude: coords.longitude,
  },
});

const MapScreen = ({ onPressBackButton, userInput }) => {
  const [socket, setSocket] = useState();
  const [memberLocations, setMemberLocations] = useState([]); // {name, location}
  
  useEffect(() => {
    const newSocket = io(`http://192.168.0.246:3000`, { query: userInput });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    Geolocation.watchPosition(({ coords }) => {
      const location = getCurrentLocation(coords, userInput);
      socket.emit('send-location', location);
    }, { enableHighAccuracy: true, distanceFilter: 500 });

    socket.on('receive-location', (result)=> {
      console.log('result', result)
      setMemberLocations([...memberLocations, result])
    });

    // return socket.off('receive-location');
  }, [socket]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={onPressBackButton}/>
      </View>
      <MapView
        locationList={memberLocations}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#eee',
  },
  header: {
    backgroundColor:'green',
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
});

export default MapScreen;
