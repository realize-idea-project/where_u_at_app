import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.buttonTitle}>  {`< 뒤로가기 `}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 120,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 2,
  },
  buttonTitle: {
    fontSize: 18,
    textAlign: 'center',
  }
})

export default BackButton;