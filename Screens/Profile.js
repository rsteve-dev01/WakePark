import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getCurrentUser } from '../database/firebase';
import {styles} from '../StyleSheet';

export default function Profile( {navigation} ) {
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
    <View style={styles.profileContainer}>
      <Text style={styles.heading}>Profile</Text>
      {user ? ( // Check if user data is available
        <View style={styles.userInfo}>
          <Text>Email:</Text>
          <Text>{user.email}</Text>

          <Text onPress={() => navigation.navigate('HomePage')}>Profile</Text>
          
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
  );
}