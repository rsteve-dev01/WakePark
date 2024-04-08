import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const Navigation = ({ navigation }) => { // destructuring navigation from props
    const [location, setLocation] = useState(null);
    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);


    return (
        <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                <Image source={require('../assets/back_arrow.png')} style={styles2.navIcon} />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Your parking space is marked, select it to enter google maps</Text>
        </View>
        <View style={{flex: 4}}>
            <MapView
                style={styles2.map} 
                initialRegion={{
                    latitude: 35.8685808472217,
                    longitude: -78.54111539956504,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                showsUserLocation={true}
            >
                <Marker
                    coordinate={{
                        latitude: 35.8685808472217,
                        longitude: -78.54111539956504,
                    }}
                    title='Parking Spot'
                ></Marker>
            </MapView>
        </View>


        <View style={styles2.container}>    

        </View>
        </ImageBackground>
    );
};

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
      },
      map: {
        width: '100%',
        height: '100%',
        marginTop: 45,
      },
      navIcon: {
        marginTop: 25,
        width: 50,
        height: 25,
        marginLeft: 10,
      },
});

export default Navigation;