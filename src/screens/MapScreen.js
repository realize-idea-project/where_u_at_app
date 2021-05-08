import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import Blank from '../components/Blank';
import BackButton from '../components/Button/BackButton';
import MapView from '../components/Map';
import io from 'socket.io-client';
import Geolocation from '@react-native-community/geolocation';

const url = 'http://api.travelparking.online'

const mock = {
  latitude: 37.551131,
  longitude: 126.9153572
};

const showAlert = (title, sentence) => {
  Alert.alert(
    `${title}`,
    `${sentence}`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
};

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
    showAlert('mounted', 'map mounted');
  }, []);

  useEffect(() => {
    // const newSocket = io(`http://192.168.0.246:8080`, { query: userInput });
    const newSocket = io(url);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    Geolocation.watchPosition(({ coords }) => {
      console.log('watchPosition')
      const location = getCurrentLocation(coords, userInput);
      socket.emit('send-location', location);
    }, { enableHighAccuracy: true, distanceFilter: 400 });

    Geolocation.getCurrentPosition(({ coords }) => {
      console.log('getPosition')
      const location = getCurrentLocation(coords, userInput);
      socket.emit('send-location', location);
    });

    socket.on('receive-location', (result)=> {
      console.log('result', result)
      showAlert('get position', `lat: ${result.location.latitude}, long: ${result.location.longitude}`);
      setMemberLocations([...memberLocations, result])
    });

    // return socket.off('receive-location');
  }, [socket]);

  const handlePressBackButton = (event) => {
    onPressBackButton(event);
    const newMemberLocations = memberLocations.filter((item) => item.id !== userInput);
    setMemberLocations(newMemberLocations);
  };

  const callApi = () => {
    console.log('api called')
    fetch(url,{
      method: 'GET',
      mode: 'cors',
    }).then(res => {
      showAlert('api called', `${res.status}`)
      return res.json();
    }).then(data => {
      showAlert('answer', data);
    });
  };

  const handlePressCheckButton = async () => {
    callApi();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={handlePressBackButton}/>
      </View>
      <View style={{height: 30}}>
        <TouchableOpacity onPress={handlePressCheckButton} style={{height: '100%'}}>
          <Text>API Check</Text>
        </TouchableOpacity>
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
