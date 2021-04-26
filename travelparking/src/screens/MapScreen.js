import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import Blank from '../components/Blank';
import BackButton from '../components/Button/BackButton';
import MapView from '../components/Map'

import io from 'socket.io-client';
import Geolocation from '@react-native-community/geolocation';

const MapScreen = ({ onPressBackButton }) => {
  const [socket, setSocket] = useState();
  const [myLocation, setMyLocation] = useState({});
  const [memberLocations, setMemberLocations] = useState([]); // {name, location}
  
  useEffect(() => {
    const newSocket = io(`http://192.168.0.246:3000`, { query: { roomNumber: 1 }});
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    Geolocation.watchPosition(({coords}) => {
      console.log('get my location', coords)
      const { latitude, longitude } = coords;
      setMyLocation({ latitude, longitude });

      socket.emit('send-location', { latitude, longitude });
      setMemberLocations([...memberLocations, { latitude, longitude }]);
    }, {maximumAge: 3000});

    socket.on('receive-location', (result)=> {
      console.log('result', result)
    });

    // return socket.off('receive-location');
  }, [socket]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={onPressBackButton}/>
      </View>
      <MapView
        myLocation={myLocation}
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
