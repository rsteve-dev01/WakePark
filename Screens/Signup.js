import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import
import { auth, createUserWithEmailAndPassword, updateProfile } from "../database/firebase";

import { useNavigation } from '@react-navigation/native';


export const SignupScreen = () => { // destructuring navigation from props
    const navigation = useNavigation();

    // Returns a validation of each field value of sign-up
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim());
    };

    // Method to validate email
    const isValidEmail = (value) => {
        const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regex.test(value);
    };

    // Method to validate password
    const isValidPassword = (value) => {
        if (value.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
            return false;
        }
        if (!/[^A-Za-z0-9]/.test(value)) {
            return false;
        }
        return true;
    };

    // Userinfo dictionary
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    

    // Error value
    const [error, setError] = useState('');

    // Variables for each field value
    const {username, email, password, confirmPassword} = userInfo;

    // Show and Hide password, with 1 being password and 2 being confirm password
    const [isSecureEntry1, setIsSecureEntry1] = useState(true);
    const [isSecureEntry2, setIsSecureEntry2] = useState(true);

    // Method to handle text input changes
    const handleOnChangeText = (value, fieldValue) => {
        console.log(value, fieldValue);
        setUserInfo({ ...userInfo, [fieldValue]: value });
    };

    // Validation of all field values to ensure all fields were properly filled out
    const isValid = () => {
        // Validates that every field is filled in
        if (!isValidObjField(userInfo)) return setError('All fields are required to proceed');
        // Validates the username, ensuring that it has at least 3 characters
        if (!username.trim() || username.length < 3) return setError('Invalid username, username requires at least 3 characters');
        // Validates email format
        if (!isValidEmail(email)) return setError('Email is invalid');
        // Validates the password, ensuring that it has at least 8 characters
        if (!password.trim() || !isValidPassword(password)) return setError('Password must be 8 characters long, with one upper and one lower case letter, and one special character.');
        // Ensures that the confirmation password was properly entered
        if (password !== confirmPassword) return setError('Password does not match');
        
        return true;
    };

    // Method to submit the form when finished and valid

    // Firebase Signup Handling **UPDATED**
    const handleSignUp = async () => {
        if (isValid()) {
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
            await updateProfile(userCredential.user, {
              displayName: username,
            });
      
            console.log("User successfully signed up:", userCredential.user);
            setError('');
      
            // Use navigation here to navigate to the homepage
            navigation.navigate('HomePage');
          } catch (error) {
            setError(error.message);
            console.error("Firebase authentication error:", error);
          }
        }
      };

    return (
        <ImageBackground source={require('../assets/bg2.png')} style={styles.backgroundImage}>
        
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Create Account</Text>
        </View>
        <View style={styles.leftContainer}>
            {error ? <Text style={{color: 'red'}}>{error}</Text>: null}
            <TextInput
              style={styles.input}
              placeholder="Enter a Username"
              autoCapitalize='none'
              value={username}
              onChangeText={(value) => handleOnChangeText(value, 'username')}
            />
            <TextInput 
              style={styles.input}
              placeholder='Enter an Email'
              autoCapitalize='none'
              value={email}
              onChangeText={(value) => handleOnChangeText(value, 'email')}
            />
            {/* Temporary show/hide button */}
            <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry1((prev) => !prev);
                }}>
              <Text>{isSecureEntry1 ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder='Enter a Password'
              autoCapitalize='none'
              secureTextEntry={isSecureEntry1}
              value={password}
              onChangeText={(value) => handleOnChangeText(value, 'password')}
            />
            {/* Temporary show/hide button */}
            <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry2((prev) => !prev);
                }}>
              <Text>{isSecureEntry2 ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder='Re-enter Your Password'
              autoCapitalize='none'
              secureTextEntry={isSecureEntry2}
              value={confirmPassword}
              onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
            />
        </View>


        <View style={styles.container}>    
            <TouchableOpacity 
              style={styles.loginButton}
              // ONPRESS SIGN UP BUTTON -------------------------------------------------
              onPress={handleSignUp}> 
                <Text style={styles.loginButtonText}>Sign Up</Text>
            </TouchableOpacity>    
            <View style={styles.signUpLink}>
                <Text>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text
                            onPress={() => navigation.navigate("Login")}
                            style={styles.signUpText}>Sign In</Text>
                    </TouchableOpacity>
            </View> 
        </View>
        </ImageBackground>
    );
};

export default SignupScreen;
