import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import Blank from '../components/Blank';
import BackButton from '../components/Button/BackButton';
import MapView from '../components/Map';
import io from 'socket.io-client';
import Geolocation from '@react-native-community/geolocation';

const url = 'https://api.travelparking.online'
// const url ='http://192.168.0.246:8080';

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

const MapScreen = ({ onPressBackButton, userInput }) => {
  const [socket, setSocket] = useState();
  const [memberLocations, setMemberLocations] = useState([]); // {name, location}

  useEffect(() => {
    showAlert('mounted', 'map mounted');
  }, []);

  useEffect(() => {
    // const newSocket = io(`http://192.168.0.246:8080`, { query: userInput });
    const newSocket = io(url, { query: userInput } );
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    Geolocation.watchPosition(({ coords }) => {
      // console.log('watch')
      showAlert('geo', 'watch');

      const currentlocation = {
        id: userInput,
        location: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        },
      };

      socket.emit('send-location', currentlocation);
    }, { enableHighAccuracy: true, distanceFilter: 400 });

    Geolocation.getCurrentPosition(({ coords }) => {
      // console.log('getCurrent')
      showAlert('geo', 'getCurrent');

      const currentlocation = {
        id: userInput,
        location: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        },
      };

      socket.emit('send-location', currentlocation);
    });

    socket.on('receive-location', (result)=> {
      console.log('result', result)
      // showAlert('get position', `lat: ${result.location.latitude}, long: ${result.location.longitude}`);
      showAlert('received', result.id);
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
