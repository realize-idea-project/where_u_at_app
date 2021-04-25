import React, { useEffect } from 'react';
import {StyleSheet, PermissionsAndroid, Platform } from "react-native";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";


const P0 = {latitude: 37.564362, longitude: 126.977011};
const P1 = {latitude: 37.565051, longitude: 126.978567};
const P2 = {latitude: 37.565383, longitude: 126.976292};
const P4 = {latitude: 37.564834, longitude: 126.977218};
const P5 = {latitude: 37.562834, longitude: 126.976218};

const App = () => {
  useEffect(() => {
    console.log('map');
    requestLocationPermission();
}, []);

  return (
    <NaverMapView style={{width: '100%', height: '100%'}}
                         showsMyLocationButton={true}
                         center={{...P0, zoom: 16}}
                        //  onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
                        //  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                        //  onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
                         >
        <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}/>
        <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>
        <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>
    </NaverMapView>
  );
};

async function requestLocationPermission() {
  if (Platform.OS !== 'android') return;
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
              title: 'Location Permission',
              message: 'show my location need Location permission',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the location');
      } else {
          console.log('Location permission denied');
      }
  } catch (err) {
      console.warn(err);
  }
}

const styles = StyleSheet.create({
 
});

export default App;
