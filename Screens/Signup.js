import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import

export const SignupScreen = ({ navigation }) => { // destructuring navigation from props
    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
        
        <View style={styles.container}>
            <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
            <Text style={[styles.loginText]}>Register</Text>
        </View>

        <View style={styles.leftContainer}>
            <Text>Enter a Username</Text>
            <TextInput style={styles.input}/>
            <Text>Enter an Email</Text>
            <TextInput style={styles.input}/>
            <Text>Enter a Password</Text>
            <TextInput style={styles.input}/>
            <Text>Re-enter Your Password</Text>
            <TextInput style={styles.input}/>
        </View>

        <View style={styles.container}>    
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>REGISTER</Text>
            </TouchableOpacity>            
        </View>
        </ImageBackground>
    );
};

export default SignupScreen;
