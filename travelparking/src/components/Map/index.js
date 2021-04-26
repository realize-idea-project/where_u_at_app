import React, { useEffect } from 'react';
import {StyleSheet, Platform } from "react-native";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

const P0 = {latitude: 37.564362, longitude: 126.977011};
const P1 = {latitude: 37.565051, longitude: 126.978567};
const P2 = {latitude: 37.565383, longitude: 126.976292};
const P4 = {latitude: 37.564834, longitude: 126.977218};
const P5 = {latitude: 37.562834, longitude: 126.976218};
const magok = { latitude: 37.560220, longitude: 126.824017};

const MapView = ({ myLocation }) => {
  
  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...magok, zoom: 16}}
  //  onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
  //  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
  //  onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
      <Marker coordinate={magok} onClick={() => console.warn('onClick! p0')}/>
      <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
      <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
    </NaverMapView>
  );
};

const styles = StyleSheet.create({
 
});

export default MapView;
