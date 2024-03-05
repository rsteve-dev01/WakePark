/* import React from 'react';
import { View, Text } from 'react-native';

export const HomePage = ({ navigation }) => {
    return (
        <View>
            <Text>Homepage</Text>
        </View>
    );
}

export default HomePage;
*/

import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';


export const HomePage = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('/Users/shreyamukherjee/Documents/WakeTech/Spring_2024/CSC289/WakePark/assets/Background.jpg')} 
            style={styles.background}>
            <View style={styles.container}>
                <Image source={require('/Users/shreyamukherjee/Documents/WakeTech/Spring_2024/CSC289/WakePark/images/homepage_pic.png')}
                style={styles.image}/>
            <Text>Cheapest and Closest Parking Spots</Text>
            <Text>Contact Us</Text>
            </View>
        </ImageBackground>
        
    );
}

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

