import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SavedParkingList = ({ route }) => {
  const { parkingSpot } = route.params;

  // Assume parkingSpot is an array of saved parking spots
  const savedParkingSpots = [...parkingSpot];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Parking Spots:</Text>
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

const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});

export default SavedParkingList;
