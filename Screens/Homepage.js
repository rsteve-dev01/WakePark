import React from 'react';
import { View, Text, Image, Button, ImageBackground, StyleSheet } from 'react-native';


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
                    style={styles.icon}/>

                    {/* Title */}
                    <View style={styles.title}>
                         <Text style={styles.titleText}>Cheapest/Closest Parking Spots</Text>
                    </View>

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
                            <View>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 2</Text>
                            </View>
                            <View>
                                <Text>$10 - $15</Text>
                                <Text style={styles.optionDescription}>Building 3</Text>
                            </View>
                        </View>
                    </View>
    
            </View>

            {/* Contact Us */}
            <View style={styles.contact}>
                <Text style={styles.contactText}>Contact Us</Text>
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
        alignItems: 'center',
        padding: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    contact: {
        fontSize: 18, 
        textAlign: 'center', 
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    tab: {
        alignItems: 'center',
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
});

export default HomePage; 
