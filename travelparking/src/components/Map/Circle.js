import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';

const RNNaverMapCircleOverlay = requireNativeComponent('RNNaverMapCircleOverlay');

export class Circle extends Component {
  render() {
      return React.createElement(RNNaverMapCircleOverlay, Object.assign({}, this.props));
  }
}