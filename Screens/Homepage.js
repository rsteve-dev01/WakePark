<<<<<<< HEAD
=======
/*import React from 'react';
import { View, TouchableOpacity, ImageBackground, Image, Linking } from 'react-native';
import { styles } from '../StyleSheet';
import WakeTechImage from '../assets/WakeTech.png'; // Adjust the path based on the location of WakeTech.png
import React from 'react';
import { View, Text } from 'react-native';
>>>>>>> Navigation-Integration

export const HomePage = ({ navigation }) => {
    const handlePress = () => {
        Linking.openURL('https://www.waketech.edu/wake-tech-news');
    };

    return (
        <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <TouchableOpacity onPress={handlePress}>
                    <Image source={WakeTechImage} style={styles.logo} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default HomePage;export default HomePage;
*/

>>>>>>> 5d7503bd2c77e92f8f1902a2356ede9727adc236
import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/Background.jpg')} 
            style={styles.background}>
            <View style={styles.container}>
<<<<<<< HEAD
                <Image
                    source={require('../images/homepage_pic.png')}
                    style={styles.image}
                />
                <Text>Cheapest and Closest Parking Spots</Text>
                <Text>Contact Us</Text>
=======
                <Image source={require('../images/homepage_pic.png')}
                style={styles.image}/>
            <Text>Cheapest and Closest Parking Spots</Text>
            <Text>Contact Us</Text>
>>>>>>> 5d7503bd2c77e92f8f1902a2356ede9727adc236
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