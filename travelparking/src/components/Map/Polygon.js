import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';

const RNNaverMapPolygonOverlay = requireNativeComponent('RNNaverMapPolygonOverlay');

export class Polygon extends Component {
  render() {
      return Platform.select({
          android: () => React.createElement(RNNaverMapPolygonOverlay, Object.assign({}, this.props)),
          ios: () => React.createElement(RNNaverMapPolygonOverlay, Object.assign({}, this.props, { coordinates: {
                  exteriorRing: this.props.coordinates,
                  interiorRings: this.props.holes,
              } }))
      })();
  }
}