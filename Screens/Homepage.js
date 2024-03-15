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
                <View style={styles.textContainer}>
                    <Image source={require('/Users/shreyamukherjee/Documents/WakeTech/Spring_2024/CSC289/WakePark/assets/icon.png')}
                    style={styles.icon}
                    />
                    <Text style={styles.title}>Cheapest and Closest Parking Spots</Text>
                </View>
            
            <Text style={styles.contact}>Contact Us</Text>
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
    textContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center', 
    },
    icon: {
        width: 28, 
        height: 28,
        marginRight: 10, 
    },
    title: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        fontWeight: 'bold', 
        textAlign:"center",
        marginBottom: 100, 
    },
    contact: {
        fontSize: 18, 
        textAlign: 'center', 
    },
});

export default HomePage;

