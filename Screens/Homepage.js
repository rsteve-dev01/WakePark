import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';

const HomePage = ({ navigation }) => {
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
                    <TouchableOpacity onPress={openDrawer}>
                        <Image source={require('../images/menu-2.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <Image
                        source={require('../images/homepage_pic.png')}
                        style={styles.image}
                    />
                    <Text>Cheapest and Closest Parking Spots</Text>
                    <Text>Contact Us</Text>
                </View>
            </ImageBackground>
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: 350,
        height: 250,
        margin: 10,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    drawerContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: '#fff',
    },
});

export default HomePage;
