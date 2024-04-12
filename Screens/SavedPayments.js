import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
      <Image source={require('../images/si.png')} style={styles.bottomRightImage} />
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
  bottomRightImage: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    width: 50,
    height: 50,
  },
});

export default SavedPayments;
