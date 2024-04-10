import React from 'react';
import {styles} from '../StyleSheet';
import { auth } from "../database/firebase";
import { getAuth, signOut } from "firebase/auth";
import { View, Text, Image, TouchableOpacity, ImageBackground, DrawerLayoutAndroid } from 'react-native';
 
export const HomePage = ({ navigation }) => {
 
    let drawerRef = React.useRef(null);
 
    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };

    //Function to log the user out and send them back to the homepage
    const auth = getAuth();
    const Logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('signout successful');
            navigation.navigate('Login');
        }).catch((error) => {
            console.log('uh oh');
        });
    };

    // Function to handle linking to Google Maps with the specified address
    const openGoogleMaps = () => {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=6600+Louisburg+Rd+C,+Raleigh,+NC+27616');
    };
    
    //statements to get the user's email and the name they will be displayed as in the drawer
    const user = auth.currentUser;
    const email = user.email;
    const username = email.substring(0, email.indexOf("@"));

    return (
        <DrawerLayoutAndroid
            ref={drawerRef}
            drawerWidth={300}
            drawerPosition={'left'}
            drawerBackgroundColor={'#F5F5F5'}
            renderNavigationView={() => (
                <View>
                    <View style={styles.drawerHeader}>
                        <Text style={styles.drawerTitle}>Hi, {username}!</Text>
                        <Text style={{...styles.greyText, fontSize:14, }}>{user.email}</Text>
                    </View>
                    <View style={styles.drawerContainer}>
                        <Text onPress={() => navigation.navigate('Profile')}>Profile</Text>
                        <Text style={styles.logoutLink} onPress={() => Logout()}>Logout</Text>
                    </View>
                </View>
            )}
        >
            <ImageBackground
                source={require('../assets/bg2.png')}
                style={styles.background}>
 
                <View style={styles.container}>
                    <TouchableOpacity onPress={openDrawer} style={styles.menuIconContainer}>
                        <Image source={require('../images/menu-2.png')} style={styles.menuIcon} />
                    </TouchableOpacity>
                    <Image source={require('../images/homepage_pic.png')} style={styles.image} />
 
                    {/* Navigation Bar */}
                    <View style={styles.navigationBar}>
                        <TouchableOpacity onPress={() => navigation.navigate('ParkingSpots')} style={styles.navItem}>
                            <Image source={require('../images/mps.png')} style={styles.navIcon} />
                            <Text style={styles.navText}>My Parking Spots</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Navigation')} style={styles.navItem}>
                            <Image source={require('../images/pinpoint.png')} style={styles.navIcon} />
                            <Text style={styles.navText}>Find Parking Spot</Text>
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
                        <Text style={styles.toggleText}>Cheapest</Text>
                        <Text style={styles.toggleText}>Closest</Text>
                       {/* <TouchableOpacity style={styles.magnifyContainer}>
                            <Text style={styles.toggleText}>Closest</Text>
                            <Image source={require('../images/magnifying_glass.png')} style={styles.magnifyIcon} />
            </TouchableOpacity> */}
                    </View>
 
                    {/* Parking Options */}
                    <View style={styles.parkingOptions}>
                        <View style={styles.option}>
                            <View>
                                <Text style={styles.optionText}>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 1</Text>
                            </View>
                            <View>
                                <Text style={styles.optionText}>$20 - $25</Text>
                                <Text style={styles.optionDescription}>Main Office</Text>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.oval}>
                                <Text style={styles.optionText}>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 2</Text>
                            </View>
                            <View>
                                <Text style={styles.optionText}>$10 - $15</Text>
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