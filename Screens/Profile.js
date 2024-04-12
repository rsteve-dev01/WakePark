import React, { useState, useEffect, useRef } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, DrawerLayoutAndroid, Text } from 'react-native';
import { styles } from '../StyleSheet';
import { getCurrentUser } from '../database/firebase';
import DrawerContent from './DrawerContent';

const Profile = ({ navigation }) => {

  let drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = getCurrentUser();
        console.log('Current User:', currentUser); // Log the current user data
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const renderPassword = () => {
    if (!showPassword || !user || !user.password) {
      return null;
    }

    const passwordLength = user.password.length;
    const maskedPassword = '●'.repeat(passwordLength); // Replace password with dots

    return (
      <Text>Password: {maskedPassword}</Text>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={'left'}
      drawerBackgroundColor={'#F5F5F5'}
      renderNavigationView={() => (
        <DrawerContent navigation={navigation} drawerRef={drawerRef} />
      )}
    >
      <ImageBackground
        source={require('../assets/bg1.png')}
        style={styles.background}
      >
        <TouchableOpacity onPress={openDrawer} style={styles.menuIconContainer}>
          <Image source={require('../images/menu-2.png')} style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
      <Text style={styles.heading}>Profile</Text>
      {user ? ( // Check if user data is available
        <View style={styles.userInfo}>
          <Text>Email:</Text>
          <Text>{user.email}</Text>

          <Text onPress={() => navigation.navigate('HomePage')}>Home Page</Text>
          
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.toggleButtonProfile}>
              {showPassword ? 'Hide Password' : 'Show Password'}
            </Text>
          </TouchableOpacity>
          {renderPassword()}
        </View>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </View>
      </ImageBackground>
    </DrawerLayoutAndroid>
  );
};

export default Profile;
