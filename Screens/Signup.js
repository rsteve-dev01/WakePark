import React, { useState } from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import

export const SignupScreen = ({ navigation }) => { // destructuring navigation from props

    // Returns a validation of each field value of sign-up
    const isValidObjField = (obj) => {
        return Object.values(obj).every(value => value.trim());
    };

    // Method to update and change the error, alongside add time duration.
    const updateError = (error, stateUpdater) => {
        stateUpdater(error);
        setTimeout(() => {
            stateUpdater('')
        }, 8500);
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

    // Method to handle text input changes
    const handleOnChangeText = (value, fieldValue) => {
        console.log(value, fieldValue);
        setUserInfo({ ...userInfo, [fieldValue]: value });
    };

    // Validation of all field values to ensure all fields were properly filled out
    const isValid = () => {
        // Validates that every field is filled in
        if (!isValidObjField(userInfo)) return updateError('All fields are required to proceed', setError);
        // Validates the username, ensuring that it has at least 3 characters
        if (!username.trim() || username.length < 3) return updateError('Invalid username, username requires at least 3 characters', setError);
        // Validates email format
        if (!isValidEmail(email)) return updateError('Email is invalid', setError);
        // Validates the password, ensuring that it has at least 8 characters
        if (!password.trim() || !isValidPassword(password)) return updateError('Password must be 8 characters long, with one upper and one lower case letter, and one special character.', setError);
        // Ensures that the confirmation password was properly entered
        if (password !== confirmPassword) return updateError('Password does not match', setError);
        
        return true;
    };

    // Method to submit the form when finished and valid
    const submit = () => {
        if (isValid()) {
            console.log(userInfo);
        }
    };

    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
        
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Register</Text>
        </View>

        <View style={styles.leftContainer}>
            <Text>Enter a Username</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              value={username}
              onChangeText={(value) => handleOnChangeText(value, 'username')}
            />
            <Text>Enter an Email</Text>
            <TextInput 
              style={styles.input}
              autoCapitalize='none'
              value={email}
              onChangeText={(value) => handleOnChangeText(value, 'email')}
            />
            <Text>Enter a Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              secureTextEntry={true}
              value={password}
              onChangeText={(value) => handleOnChangeText(value, 'password')}
            />
            <Text>Re-enter Your Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(value) => handleOnChangeText(value, 'confirmPassword')}
            />
            {error ? <Text style={{color: 'red'}}>{error}</Text>: null}
        </View>

        <View style={styles.container}>    
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={submit}>
                <Text style={styles.loginButtonText}>REGISTER</Text>
            </TouchableOpacity>            
        </View>
        </ImageBackground>
    );
};

export default SignupScreen;
