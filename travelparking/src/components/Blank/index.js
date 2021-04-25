import React from 'react';
import { View } from 'react-native';

const Blank = ({ horizontal = false, size, customStyle }) => {
  const blankSize = horizontal ? { width: size } : { height: size };
  return <View style={[blankSize, customStyle]} />;
};

export default Blank;
