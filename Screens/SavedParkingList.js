import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {styles} from '../StyleSheet';

const SavedParkingList = ({ route }) => {
  const { parkingSpot } = route.params;

  // Assume parkingSpot is an array of saved parking spots
  const savedParkingSpots = [...parkingSpot];

  return (
    <View style={styles.ParkingListContainer}>
      <Text style={styles.ParkingListTitle}>Saved Parking Spots:</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal showsHorizontalScrollIndicator={false}>
        {savedParkingSpots.map((spot, index) => (
          <Text key={index}>
            {spot}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default SavedParkingList;
