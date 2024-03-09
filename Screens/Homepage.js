import React from 'react';
import { View, TouchableOpacity, ImageBackground, Image, Linking } from 'react-native';
import { styles } from '../StyleSheet';
import WakeTechImage from '../assets/WakeTech.png'; // Adjust the path based on the location of WakeTech.png

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

export default HomePage;


{
    /*import { createAppContainer } from 'react-navigation/native';
import { createDrawerNavigation, createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions } from 'react-native';

import { Feather } from '@expo/vector-icons';

import {
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    LogOutScreen
} from '../Screens/DrawerIndex';

const DrawerNavigator = createDrawerNavigator({
    ProfileScreen,
    MessageScreen,
    ActivityScreen,
    ListScreen,
    ReportScreen,
    StatisticScreen,
    LogOutScreen
});

export default createAppContainer(DrawerNavigator); */
}