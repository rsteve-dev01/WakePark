import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export const PreviousParking = ({ navigation }) => {
  const [parkingSpot, setParkingSpot] = useState('');

  const handleSave = () => {
    // Save parking spot data (e.g., to AsyncStorage or state management)
    // Navigate to SavedParkingListScreen and pass the saved parking spot data
    navigation.navigate('SavedParkingList', { parkingSpot });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter parking spot details"
        value={parkingSpot}
        onChangeText={setParkingSpot}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%' }}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default PreviousParking;