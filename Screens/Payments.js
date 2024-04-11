import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payments = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigation = useNavigation();

  const handleCardSelection = (cardType) => {
    setSelectedCard(cardType);
  };

  const handleMakePayment = () => {
    navigation.navigate('MakePayment');
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Payments</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.mainHeader}>Select a Card</Text>
          <Text style={styles.subText}>Tap to select a card from below</Text>
          <View style={styles.cardOptions}>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Mastercard' && styles.selectedCard]}
              onPress={() => handleCardSelection('Mastercard')}
            >
              <Image source={require('../assets/mastercard.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Mastercard</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Discover' && styles.selectedCard]}
              onPress={() => handleCardSelection('Discover')}
            >
              <Image source={require('../assets/discover.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'Visa' && styles.selectedCard]}
              onPress={() => handleCardSelection('Visa')}
            >
              <Image source={require('../assets/visa.png')} style={styles.cardImage} />
              <Text style={styles.cardText}>Visa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.makePaymentButton} onPress={handleMakePayment}>
          <Text style={styles.buttonText}>Make Payment Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navbarContainer}>
        <Text style={styles.navLink} onPress={() => navigation.navigate('SavedPayments')}>
          Open Previously Saved Payments
        </Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
    fontStyle: 'italic',
  },
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#BEBEBE',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardOptions: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B0E0E6',
    marginBottom: 10,
    width: '100%',
  },
  selectedCard: {
    backgroundColor: 'green',
  },
  cardImage: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  makePaymentButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
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
  navLink: {
    color: 'white',
    textDecorationLine: 'underline',
    marginBottom: 10,
    textAlign: 'center',
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
});

export default Payments;
