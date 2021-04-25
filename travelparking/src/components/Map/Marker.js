import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';
const RNNaverMapMarker = requireNativeComponent('RNNaverMapMarker');

export class Marker extends Component {
  render() {
      var _a;
      return React.createElement(RNNaverMapMarker, Object.assign({}, this.props, { image: getImageUri(this.props.image), caption: this.props.caption && Object.assign(Object.assign({}, this.props.caption), { textSize: (_a = this.props.caption.textSize) !== null && _a !== void 0 ? _a : 12, color: parseColor(this.props.caption.color), haloColor: parseColor(this.props.caption.haloColor) }) }));
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

function parseColor(color) {
  if (color && Platform.OS === 'ios')
      return processColor(color);
  return color;
}