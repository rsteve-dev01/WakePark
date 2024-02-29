import React, { useState } from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../StyleSheet';
import { auth, sendPasswordResetEmail } from '../database/firebase'; // Update the path accordingly
import { Alert } from 'react-native';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  const handleResetPassword = async () => {
    if (!email) {
      // Handle empty email case
      return;
    }

    try {
      // Send reset email from Firebase
      await sendPasswordResetEmail(auth, email);

      
    } catch (error) {
      // Handle error
      console.error('Error sending reset email:', error);
      Alert.alert('Error sending reset email. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToLogin}>
          <Image source={require('../assets/back_arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />

        <Text style={[styles.greyText, styles.centeredText]}>Enter your email to reset your password.</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          fontWeight={'bold'}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleResetPassword}>
          <Text style={styles.loginButtonText}>RESET PASSWORD</Text>
        </TouchableOpacity>

        <View style={styles.signUpLink}>
          <TouchableOpacity onPress={handleBackToLogin}><Text style={styles.signUpText}>Back to Login</Text></TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
