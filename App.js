import React from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import logo from './assets/transparent_icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* App Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* Login Text */}
      <Text style={styles.loginText}>Login</Text>
      <Text style={styles.greyText}>Please sign in to continue.</Text>

      {/* Username Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        // You can handle onChangeText event here
        onChangeText={(text) => console.log(text)}
        // Apply bold font style when typing
        fontWeight={'bold'}
      />

      {/* Password Field */}
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          secureTextEntry={true}
          // You can handle onChangeText event here
          onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>FORGOT</Text>
        </TouchableOpacity>
      </View>

      {/* LOGIN Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <View style={styles.signUpLink}>
        <Text style={styles.centeredText}>Don't have an account? </Text>
        <TouchableOpacity><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  greyText: {
    fontSize: 16,
    color: '#888',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontWeight: 'normal',
  },
  forgotButton: {
    paddingVertical: 10,
  },
  forgotText: {
    color: 'blue',
  },
  loginButton: {
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'flex-end', 
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  centeredText: {
    textAlign: 'center',
  },
  signUpText: {
    color: 'blue',
  },
});