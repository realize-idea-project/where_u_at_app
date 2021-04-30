import React, { useEffect } from 'react';
import {StyleSheet, Platform } from "react-native";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";
import _ from 'lodash';

const P0 = {id: 'no1', location: {latitude: 37.564362, longitude: 126.977011}};
const P1 = {id: 'no2', location: {latitude: 37.565051, longitude: 126.978567}};
const P2 = {id: 'no3', location: {latitude: 37.565383, longitude: 126.976292}};
const P4 = {id: 'no5', location: {latitude: 37.564834, longitude: 126.977218}};
const P5 = {id: 'no6', location: {latitude: 37.562834, longitude: 126.976218}};

const magok = { latitude: 37.560220, longitude: 126.824017};
const mockList = [ P0, P1, P2, P4, P5 ];

const renderMarkers = (list) => {
  const markerList = list ? [...list, ...mockList] : mockList;

  return markerList.map(({id, location}, index) => (
  <Marker
    key={location.latitude.toString()}
    coordinate={location}
    onClick={() => console.log(index)}
    caption={{text: id }}
  />));
};

const MapView = ({ locationList }) => {
  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      center={{...magok, zoom: 16}}
  //  onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
  //  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
  //  onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
    >
      {/* <Marker coordinate={currentPosition} onClick={() => console.warn('onClick! p0')}/>
      <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
      <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/> */}
      {renderMarkers(locationList)}
    </NaverMapView>
  );
};

const styles = StyleSheet.create({
 
});

export default MapView;
