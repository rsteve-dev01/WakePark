import React, { useState } from 'react';
import { KeyboardAvoidingView, ImageBackground, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from '../StyleSheet.js'; // corrected import

export const ParkingSpots = ({ navigation }) => {
    return(
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.container}></View>
                <View style={styles.container}>
                    <Image source={require('../assets/transparent_icon.png')} style={styles.logo}/>
                    <Text style={styles.loginText}>My Parking Spots</Text>
                </View>
                <View style={{flexDirection:'row',  ...styles.container}}>
                    <TouchableOpacity style={{...styles.leftContainer, ...styles.parkingButton}} onPress={() => navigation.navigate('PreviousParking')}>
                        <Text style={styles.parkingButtonText}>Save Parking Spot</Text>
                    </TouchableOpacity>
                    <Text>Icon</Text>
                    <Text>Camera Icon</Text>
                </View>
                <View style={{flexDirection:'row', ...styles.container}}>
                    <TouchableOpacity style={{...styles.leftContainer, ...styles.parkingButton}}>
                        <Text style={styles.parkingButtonText}>Get Assigned Parking</Text>
                    </TouchableOpacity>
                    <Text>Icon</Text>
                    <Text>Camera Icon</Text>
                </View>
                <TouchableOpacity style={styles.parkingButton}>
                    <Text style={styles.parkingButtonText}>Open Previously Saved Parking Spots</Text>
                </TouchableOpacity>
                <View style={styles.container}></View>
            </View>
        </ImageBackground>
    );
}

export default ParkingSpots;