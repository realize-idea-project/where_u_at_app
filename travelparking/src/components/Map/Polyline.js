import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';

const RNNaverMapPolylineOverlay = requireNativeComponent('RNNaverMapPolylineOverlay');

export class Polyline extends Component {
  render() {
      return React.createElement(RNNaverMapPolylineOverlay, Object.assign({}, this.props));
  }
}