import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../StyleSheet';

const MyParkingSpots = () => {
    const handleSaveParkingSpot = () => {
        
    };

    const handleGetAssignedParking = () => {
        
    };

    const handleOpenSavedSpots = () => {
        
    };


    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Image source={require('../assets/transparent_icon.png')} style={styles.logo} />
                <Text style={[styles.loginText, styles.centeredText]}>My Parking Spots</Text>
                <TouchableOpacity onPress={handleSaveParkingSpot} style={[styles.button, styles.buttonWithIcon]}>
                    <Text style={styles.buttonText}>Save Parking Spot</Text>
                    <Image source={require('../assets/Camera.jpg')} style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleGetAssignedParking} style={[styles.button, styles.buttonWithIcon]}>
                    <Text style={styles.buttonText}>Get Assigned Parking</Text>
                    <Image source={require('../assets/Camera.jpg')} style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenSavedSpots} style={[styles.button, styles.centeredButton]}>
                    <Text style={styles.buttonText}>Open Previously Saved Parking Spots</Text>
                </TouchableOpacity>
                <Image
                    source={require('../assets/Support.jpg')}
                    style={styles.supportImage}
                />
            </View>
        </ImageBackground>
    );
}

export default MyParkingSpots;