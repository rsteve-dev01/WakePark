import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/Background.jpg')} 
            style={styles.background}>
            <View style={styles.container}>
                <Image
                    source={require('../images/homepage_pic.png')}
                    style={styles.image}
                />
                <Text>Cheapest and Closest Parking Spots</Text>
                <Text>Contact Us</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default HomePage;