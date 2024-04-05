/*
This is the file controlling navigtions
Every new screen will need to be added here in order to reach it in the app

To add a new screen:
1) Create the file in the 'Screens' directory
2) Import the main component from that file
3) In the Stack.Naviagtor below add:
  <Stack.Screen name="{Name of the Page}" component={"Name of the component"}/>
*/

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./Screens/Signup";
import LoginScreen from "./Screens/Login";
import Onboarding from "./Screens/Onboarding/Onboarding";
import ForgotPassword from './Screens/Forgot-Password';
import HomepageNew from './Screens/Updates/HomepageNew'; // Change this later
import HomePage from './Screens/Homepage'; // Change this later
import ParkingSpots from './Screens/ParkingSpots';
import AssignedParking from './Screens/AssignedParking';

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AssignedParking"
            // Hide all headers on the pages
            screenOptions = {{
                headerShown: false
            }}
            >
                <Stack.Screen name="AssignedParking" component={AssignedParking} />
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="HomepageNew" component={HomepageNew} />
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Signup" component={SignupScreen}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                <Stack.Screen name="ParkingSpots" component={ParkingSpots}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
