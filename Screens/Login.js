import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet';


export default function LoginScreen({navigation}) {
  return (
    // This is the Background Image
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* This is our App Logo */}
        <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />

        {/* Login Text */}
        <Text style={[styles.loginText, styles.centeredText]}>Login</Text>
        {/* Please sign in to continue text */}
        <Text style={[styles.greyText, styles.centeredText]}>Please sign in to continue.</Text>

        {/* Username field thats actually inside the username box */}
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          // You can handle onChangeText event here
          onChangeText={(text) => console.log(text)}
          // This is just applying bold font style when the user typing
          fontWeight={'bold'}
        />

        {/* This is the Password Field */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            // You can handle onChangeText event here
            onChangeText={(text) => console.log(text)}
          />
          {/* The actual Forgot Password Button */}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>FORGOT</Text>
          </TouchableOpacity>
        </View>

        {/* The LOGIN Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* This is the Sign Up Link */}
        <View style={styles.signUpLink}>
          {/* The Information Text under the log in button */}
          <Text style={styles.centeredText}>Don't have an account? </Text>
          {/* The Sign Up Button */}
          <TouchableOpacity><Text onPress={() => navigation.navigate("Signup")} style={styles.signUpText}>Sign up</Text></TouchableOpacity>
        </View>

        {/* Status Bar */}
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}