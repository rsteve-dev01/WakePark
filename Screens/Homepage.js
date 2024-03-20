<<<<<<< Updated upstream
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
    
            </View>

            {/* Contact Us */}
            <View style={styles.title}>
                <Text style={styles.titleText}>Contact Us</Text>
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
=======
//import React, { useState } from 'react';
//import { View } from 'react-native';

//export const HomePage = ({ navigation }) => {

//    return (
//        <View>
//            <Text>Homepage</Text>
//        </View>
//    );
    
//}

//export default HomePage;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = () => {
  const [currentPage, setCurrentPage] = useState('Payments');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={[styles.navItem, currentPage === 'Payments' && styles.activeNavItem]}
        onPress={() => navigateToPage('Payments')}>
        <Text style={styles.navItemText}>Payments</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, currentPage === 'MyParkingLot' && styles.activeNavItem]}
        onPress={() => navigateToPage('MyParkingLot')}>
        <Text style={styles.navItemText}>My Parking Lot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navItem, currentPage === 'FullView' && styles.activeNavItem]}
        onPress={() => navigateToPage('FullView')}>
        <Text style={styles.navItemText}>Full View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  navItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NavigationBar;
>>>>>>> Stashed changes
