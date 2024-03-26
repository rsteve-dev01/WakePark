import React from 'react';
import {styles} from '../StyleSheet';
import { View, Text, Image, Button, ImageBackground, TouchableOpacity, DrawerLayoutAndroid, Linking } from 'react-native';

export const HomePage = ({ navigation }) => {

    let drawerRef = React.useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };

    // Function to handle linking to Google Maps with the specified address
    const openGoogleMaps = () => {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=6600+Louisburg+Rd+C,+Raleigh,+NC+27616');
    };

    return (
        <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={() => (
                <View style={styles.drawerContainer}>
                    <Text onPress={() => navigation.navigate('Profile')}>Profile</Text>
                    <Text onPress={() => alert('Logout button pressed')}>Logout</Text>
                </View>
            )}
        >
            <ImageBackground
                source={require('../assets/Background.jpg')}
                style={styles.background}>

                <View style={styles.container}>
                    <TouchableOpacity onPress={openDrawer} style={styles.menuIconContainer}>
                        <Image source={require('../images/menu-2.png')} style={styles.menuIcon} />
                    </TouchableOpacity>
                    <Image source={require('../images/homepage_pic.png')} style={styles.image} />

                    {/* Navigation Bar */}
                    <View style={styles.navigationBar}>
                        <TouchableOpacity onPress={() => navigation.navigate('My Parking Spots')} style={styles.navItem}>
                            <Image source={require('../images/mps.png')} style={styles.navIcon} />
                            <Text style={styles.navText}>My Parking Spots</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Parking Lot Full View')} style={styles.navItem}>
                            <Image source={require('../images/pinpoint.png')} style={styles.navIcon} />
                            <Text style={styles.navText}>Parking Lot Full View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Payments')} style={styles.navItem}>
                            <Image source={require('../images/pi.png')} style={styles.navIcon} />
                            <Text style={styles.navText}>Payments</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Title */}
                    <View style={styles.titleContainer}>
                        <Image source={require('../assets/icon.png')} style={styles.icon} />
                        <Text style={styles.titleText}>Cheapest/Closest Parking Spots</Text>
                    </View>

                    {/* Toggle Buttons */}
                    <View style={styles.toggleButtons}>
                        <Button title="Cheapest" color="#007bff" />
                        <Button title="Closest" />
                    </View>

                    {/* Parking Options */}
                    <View style={styles.parkingOptions}>
                        <View style={styles.option}>
                            <TouchableOpacity onPress={openGoogleMaps} style={styles.oval}>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 1</Text>
                            </TouchableOpacity>
                            <View>
                                <Text>$20 - $25</Text>
                                <Text style={styles.optionDescription}>Main Office</Text>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <TouchableOpacity onPress={openGoogleMaps} style={styles.oval}>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 2</Text>
                            </TouchableOpacity>
                            <View>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 3</Text>
                            </View>
                        </View>
                    </View>

                    {/* Contact Us */}
                    <TouchableOpacity onPress={() => navigation.navigate('Support')} style={styles.contactContainer}>
                        <Text style={styles.contactText}>Contact Us</Text>
                        <Image source={require('../images/si.png')} style={styles.supportIcon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </DrawerLayoutAndroid>
    );
}

export default HomePage;