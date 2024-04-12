import React, { useState } from 'react';
import { View, TextInput, Button, ImageBackground, Image, Text } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import

export const PreviousParking = ({ navigation }) => {
  const [parkingSpot, setParkingSpot] = useState('');

  const handleSave = () => {
    // Save parking spot data (e.g., to AsyncStorage or state management)
    // Navigate to SavedParkingListScreen and pass the saved parking spot data
    navigation.navigate('SavedParkingList', { parkingSpot });
  };

  return (
    <ImageBackground
      source={require('../assets/bg2.png')} // Replace 'background.jpg' with your image file
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
          <Text style={styles.loginText}>Save Parking Spot</Text>
        </View>
        <TextInput
          placeholder="Enter parking spot details"
          value={parkingSpot}
          onChangeText={setParkingSpot}
          style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%', backgroundColor: 'white' }}
        />
        <Button title="Save" onPress={handleSave} />
      </View>
    </ImageBackground>
  );
};

export default PreviousParking;
