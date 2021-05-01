import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const LoginButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonTitle}>시작하기</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 140,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 28
  }
})

export default LoginButton;