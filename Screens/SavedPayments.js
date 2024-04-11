import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const SavedPayments = ({ navigation }) => {
  const route = useRoute();
  const { lastFourDigits } = route.params;

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Previous Payment Methods</Text>
        </View>
        <View style={styles.cardContainer}>
          <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Mastercard ending with {lastFourDigits}</Text>
          </View>
        </View>
      </View>
      <View style={styles.navbarContainer}>
        <View style={styles.navbarContent}>
          <TouchableOpacity onPress={() => navigation.navigate('ParkingSpots')} style={styles.navItem}>
            <Image source={require('../images/mps.png')} style={styles.navIcon} />
            <Text style={styles.navText}>My Parking Spots</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Navigation')} style={styles.navItem}>
            <Image source={require('../images/pinpoint.png')} style={styles.navIcon} />
            <Text style={styles.navText}>Find Parking Spot</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Payments')} style={styles.navItem}>
            <Image source={require('../images/pi.png')} style={styles.navIcon} />
            <Text style={styles.navText}>Payments</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../assets/transparent_icon.png')} style={styles.icon} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    color: '#87CEFA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },
  cardTextContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  navbarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#4B0082',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navbarContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    color: '#4B0082',
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 50,
    height: 50,
  },
});

export default SavedPayments;
