import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';
import io from 'socket.io-client';
import * as config from './config';

const socket = io(`http://${config.localhost}:${config.port}`);

const App = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // useEffect(() => {
  //   if (timeId) return timeId = null;
  //   let timeId = setInterval(() => {
  //     receiveMessage();
  //   }, 1000)
  // },[chatMessages]);

  const submitChatMessage = () => {
    socket.emit('chat message', chatMessage);
    setChatMessage('');
  };

  const receiveMessage = () => {
    socket.on('chat message', message => {
      console.log('i got back message from server', message);
      setChatMessages([...chatMessages, message]);
    })
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <TextInput
          value={chatMessage}
          style={{height: 100, borderWidth: 2}}
          autoCorrect={false}
          onChangeText={chatMessage => setChatMessage(chatMessage)}
          onSubmitEditing={submitChatMessage}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
