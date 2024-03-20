import React from 'react';
import { View, Text, Image, Button, ImageBackground, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';

export const HomePage = ({ navigation }) => {

    let drawerRef = React.useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
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
                            <View>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 1</Text>
                            </View>
                            <View>
                                <Text>$20 - $25</Text>
                                <Text style={styles.optionDescription}>Main Office</Text>
                            </View>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.oval}>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 2</Text>
                            </View>
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: 350,
        height: 250,
        margin: 20,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        width: 28,
        height: 28,
        marginRight: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    toggleButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    parkingOptions: {
        padding: 10,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    optionDescription: {
        color: '#888',
    },
    drawerContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: '#fff',
    },
    menuIconContainer: {
        position: 'absolute',
        top: 30,
        right: 10,
        zIndex: 1,
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    },
    navItem: {
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    navIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    navText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 'auto',
        marginBottom: 10,
        marginRight: 10,
    },
    contactText: {
        fontSize: 20,
        marginRight: 10,
    },
    supportIcon: {
        width: 45,
        height: 45,
    },
});

export default HomePage;
