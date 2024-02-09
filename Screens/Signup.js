import React from 'react';
import { StatusBar, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import

export const SignupScreen = ({ navigation }) => { // destructuring navigation from props
    return (
        <View style={styles.container}>
            <Text>Enter a Username</Text>
            <Text>Enter an Email</Text>
            <Text>Enter a Password</Text>
            <Text>Re-enter Your Password</Text>                
        </View>
    );
};

export default SignupScreen;
