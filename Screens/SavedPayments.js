import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet';

const SavedPayments = ({ navigation, route }) => {
  const { cardDescription } = route.params;

  const handleGoToPayments = () => {
    navigation.navigate('Payments');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.savedCardText}>{cardDescription}</Text>
      <TouchableOpacity style={styles.goBackButton} onPress={handleGoToPayments}>
        <Text style={styles.buttonText}>Go to Payments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SavedPayments;