import React, { useState } from 'react';
import { View, Image, ImageBackground, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '../StyleSheet';

const Payments = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [company, setCompany] = useState('');
  const [savedCard, setSavedCard] = useState('');

  const handleSavePayment = () => {
    console.log('Payment information saved:', { company, cardNumber, expiryDate, cvv });
    setCompany('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
  };

  const handleOpenSavedPayments = () => {
    navigation.navigate('SavedPayments', { cardDescription: `${company} ending with ${cardNumber.slice(-4)}` });
  };

  const formatCardNumber = (input) => {
    const formattedNumber = input.replace(/\D/g, '');
    setCardNumber(formattedNumber.slice(0, 16));
  };

  const formatExpiryDate = (input) => {
    let formattedDate = input.replace(/^([0-9]{2})[/-]?([0-9]{0,2})/, '$1/$2');
    formattedDate = formattedDate.slice(0, 5);
    setExpiryDate(formattedDate);
  };

  const formatCvv = (input) => {
    const formattedCvv = input.replace(/\D/g, '').slice(0, 3);
    setCvv(formattedCvv);
  };

  return (
    <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Company (Visa, Mastercard, Discover, etc.)"
          value={company}
          onChangeText={text => setCompany(text)}
          blurOnSubmit={true}
        />
        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChangeText={text => formatCardNumber(text)}
          keyboardType="numeric"
          blurOnSubmit={true}
        />
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={expiryDate}
          onChangeText={text => formatExpiryDate(text)}
          blurOnSubmit={true}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={text => formatCvv(text)}
          keyboardType="numeric"
          blurOnSubmit={true}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSavePayment}>
          <Text style={styles.saveButtonText}>Save Payment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.openSavedButton} onPress={handleOpenSavedPayments}>
          <Text style={styles.openSavedButtonText}>Open Previously Saved Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.homeButtonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Payments;