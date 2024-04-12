import React from 'react';
import { styles } from '../StyleSheet';
import { getAuth, signOut } from "firebase/auth";
import { View, Text, Image, TouchableOpacity, ImageBackground, DrawerLayoutAndroid, } from 'react-native';

export const HomePage = ({ navigation }) => {
    let drawerRef = React.useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };

    //method to logout the user
    const auth = getAuth();
    const Logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log('signout successful');
            navigation.navigate('Login');
        }).catch((error) => {
            console.log('signout unsuccessful');
        });
    };

    const openGoogleMaps = () => {
        Linking.openURL('https://www.google.com/maps/search/?api=1&query=6600+Louisburg+Rd+C,+Raleigh,+NC+27616');
    };

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
                        <Text style={styles.drawerSubtext}>{user.email}</Text>
                    </View>
                    <View style={styles.drawerContainer}>
                        <TouchableOpacity style={styles.drawerButtons} onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.drawerItems}>Profile</Text>
                        </TouchableOpacity>

                        <View style={styles.drawerSeperator}/>
                        <TouchableOpacity style={styles.drawerButtons} onPress={() => navigation.navigate('Settings')}>
                            <Text style={styles.drawerItems}>Settings</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerSeperator}/>
                        
                        <TouchableOpacity style={styles.drawerButtons} onPress={() => Logout()}>
                            <Text style={styles.drawerItems} >Logout</Text>
                        </TouchableOpacity>
                        <View style={styles.drawerSeperator}/>
                    </View>
                </View>
            )}
        >
            <ImageBackground
                source={require('../assets/bg2.png')}
                style={styles.background}>

                <View style={styles.homepageContainer}>
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
                        <View style={styles.titleIconsContainer}>
                            <TouchableOpacity style={styles.titleIconContainer}>
                                <Image source={require('../assets/magnifying-glass.png')} style={styles.titleIcon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.titleIconContainer}>
                                <Image source={require('../assets/three-vertical-dots.png')} style={styles.titleIcon} />
                            </TouchableOpacity>
                        </View>
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
                        <Image source={require('../images/si.png')} style={styles.supportIcon} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </DrawerLayoutAndroid>
    );
}

export default HomePage;
