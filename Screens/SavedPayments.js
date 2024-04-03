import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from '../StyleSheet';

const SavedPayments = ({ navigation, route }) => {
  const { cardDescription } = route.params;

  const handleGoToHomePage = () => {
    navigation.navigate('HomePage');
  };

  return (
    <ImageBackground source={require('../assets/bg1.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('../assets/transparent_icon.png')} style={styles.icon} />
          <Text style={styles.titleText}>Saved Payments</Text>
        </View>
        <Text style={styles.savedCardText}>{cardDescription}</Text>
        <TouchableOpacity style={styles.homeButton} onPress={handleGoToHomePage}>
          <Text style={styles.homeButtonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SavedPayments;