import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity,Image,ImageBackground } from 'react-native'
import React from 'react'
import { styles } from '../StyleSheet'
import icon from '../assets/icon.png';
import SearchBar from '../src/components/SearchBar';
import PopularTopics from '../src/components/PopularTopics';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';
import Logo from '../src/components/Logo';


const SupportPage = () => {
  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={customStyles.backgroundImage}>
        <SafeAreaView style={customStyles.viewContainer}>
            <Logo />
            <SearchBar onSearch={() => {}} />
            <PopularTopics />
        </SafeAreaView>
    </ImageBackground>
  )
}


export default SupportPage

const customStyles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent:"flex-start",
        resizeMode: "cover",
     
    },
    centereItems: {
        alignItems: 'center',
    },
    viewContainer: {
        zIndex: 100,
        backgroundColor: 'rgba(255,255,255,0.7)',
        resizeMode: "cover",
        height: '90%',
        marginTop: 40,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor:'yellow',
        zIndex: 100,
       
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    });