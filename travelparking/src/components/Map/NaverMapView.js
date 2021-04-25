import React, { Component } from 'react';
import { findNodeHandle, Image, NativeModules, Platform, processColor, requireNativeComponent, UIManager, } from 'react-native';

const RNNaverMapView = requireNativeComponent('RNNaverMapView');
const RNNaverMapViewTexture = Platform.select({
    android: () => requireNativeComponent('RNNaverMapViewTexture'),
    ios: () => RNNaverMapView
})();

export default class NaverMapView extends Component {
  constructor() {
      super(...arguments);
      this.resolveRef = (ref) => {
          this.ref = ref;
          this.nodeHandle = findNodeHandle(ref);
      };
      this.animateToCoordinate = (coord) => {
          this.dispatchViewManagerCommand('animateToCoordinate', [coord]);
      };
      this.animateToTwoCoordinates = (c1, c2) => {
          this.dispatchViewManagerCommand('animateToTwoCoordinates', [c1, c2]);
      };
      this.animateToCoordinates = (coords, bounds) => {
          this.dispatchViewManagerCommand("animateToCoordinates", [coords, bounds]);
      };
      this.animateToRegion = (region) => {
          this.dispatchViewManagerCommand('animateToRegion', [region]);
      };
      this.setLocationTrackingMode = (mode) => {
          this.dispatchViewManagerCommand('setLocationTrackingMode', [mode]);
      };
      this.showsMyLocationButton = (show) => {
          this.dispatchViewManagerCommand('showsMyLocationButton', [show]);
      };
      this.dispatchViewManagerCommand = (command, arg) => {
          return Platform.select({
              // @ts-ignore
              android: () => UIManager.dispatchViewManagerCommand(this.nodeHandle,
              // @ts-ignore
              UIManager.getViewManagerConfig('RNNaverMapView').Commands[command], arg),
              ios: () => NativeModules[`RNNaverMapView`][command](this.nodeHandle, ...arg),
          })();
      };
      this.handleOnCameraChange = (event) => this.props.onCameraChange && this.props.onCameraChange(event.nativeEvent);
      this.handleOnMapClick = (event) => this.props.onMapClick && this.props.onMapClick(event.nativeEvent);
  }
  render() {
      const { onInitialized, center, tilt, bearing, mapPadding, logoMargin, nightMode, useTextureView, } = this.props;
      const ViewClass = useTextureView ? RNNaverMapViewTexture : RNNaverMapView;
      return React.createElement(ViewClass, Object.assign({ ref: this.resolveRef }, this.props, { onInitialized: onInitialized, center: center, mapPadding: mapPadding, logoMargin: logoMargin, tilt: tilt, bearing: bearing, nightMode: nightMode, onCameraChange: this.handleOnCameraChange, onMapClick: this.handleOnMapClick }));
  }
}