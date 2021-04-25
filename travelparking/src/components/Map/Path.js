import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';
const RNNaverMapPathOverlay = requireNativeComponent('RNNaverMapPathOverlay');

export class Path extends Component {
  render() {
      return React.createElement(RNNaverMapPathOverlay, Object.assign({}, this.props, { pattern: getImageUri(this.props.pattern) }));
  }
}

function getImageUri(src) {
  let imageUri = null;
  if (src) {
      let image = Image.resolveAssetSource(src) || { uri: null };
      imageUri = image.uri;
  }
  return imageUri;
}
