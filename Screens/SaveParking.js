import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, Text, View, StyleSheet } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import
import { useNavigation } from '@react-navigation/native';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import parkingData from '../parkingspaces.json'

export const SaveParking = () => { // destructuring navigation from props
    const [facing, setFacing] = useState('back');
    const [status, requestPermissions] = useCameraPermissions();
    const [scanData, setScanData] = useState();

    useEffect(() => {
      if (!status?.granted) requestPermissions();
      }, []);
    
      if (status === undefined) {
        return <Text>Requesting permissions...</Text>
      } else if (!status) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
      }

      const handleBarCodeScanned = ({type, data}) => {
        setScanData(data);
        console.log(`Data: ${data}`);
        console.log(`Type: ${type}`);
        
        if (data === '1103') {
          console.log(parkingData[1103])
        }
        if (data === '2229') {
          console.log(parkingData[2229])
        }
        if (data === '3001') {
          console.log(parkingData[3001])
        }
      };

    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Save Parking Spot</Text>
        </View>
        <View style={styles.leftContainer}>
            <CameraView style={styles2.camera}
            facing={facing}
            barcodeScannerSettings={{barcodeTypes: ["qr"],}}
            onBarcodeScanned={scanData ? undefined : handleBarCodeScanned}>
            </CameraView>
        </View>


        <View style={styles.container}>    
           
        </View>
        </ImageBackground>
    );
};

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });

export default SaveParking;